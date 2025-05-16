//this file will having all functions that will be treated with the product and with integerating the urls with the function logic in the same place
//rather than define another controller foldre and it will be having only the code implementation logic only and the route having the urls only 
/*
- add a product 
- delete a product 
- list all products
- update specific product

*/
console.log("routes/product.js file is being executed");
const express = require("express")
const route = express.Router()
const Item = require("../models/item")
const Menu = require("../models/Menu");
const auth = require("../middleware/auth")
const authRole = require("../middleware/authorize");

//first lets handle the delete product logic function 
route.delete("/:productName", auth, authRole("admin"), async (req, res) => {
    const productname = req.params.productName;

    if (!productname) {
        return res.status(400).json({ message: "Product name is required." });
    }

    //  نجيب المنتج نفسه الأول
    const product = await Item.findOne({ name: productname });

    if (!product) {
        return res.status(404).json({ message: `Product with name "${productname}" not found.` });
    }

    //   نحذفه من مجموعة المنتجات
    await Item.deleteOne({ _id: product._id });

    //  نحذفه من المنيو كمان
    const menu = await Menu.findOne();
    if (menu) {
        // نلاقي الفئة اللي فيها المنتج
        const category = menu.categories.find(cat => cat.title === product.category);

        if (category) {
            // نشيل الـ ObjectId من الفئة
            category.items = category.items.filter(
                itemId => itemId.toString() !== product._id.toString()
            );
        }

        await menu.save(); // حفظ التعديلات
    }

    res.status(200).json({ message: `Product "${productname}" deleted successfully.` });
});

route.post("/add-menu", auth, authRole("admin"), async (req, res) => {
    try {
        const newMenu = new Menu({
            title: "Pulse and Plate Menu",
            categories: []  // يمكن أن تتركها فارغة أو تضيف فيها فئات
        });

        await newMenu.save();
        res.status(201).json({ message: "Menu created successfully.", menu: newMenu });
    } catch (error) {
        res.status(500).json({ message: "Error creating menu", error: error.message });
    }
});

route.post("/add-item", auth, authRole("admin"), async (req, res) => {
    try {
        const { name, description, calories, price, category, quantity, image } = req.body;

        // Basic validation
        if (!name || !price || !image || !category) {
            return res.status(400).json({ message: "Complete the product missing info" });
        }

        // Check if product already exists
        const existingProduct = await Item.findOne({ name });
        if (existingProduct) {
            return res.status(409).json({ message: "Product already added" });
        }

        // Create new item with optional quantity
        const newItemData = {
            name,
            photo: image,
            price,
            description,
            calories,
            category,
        };
        if (quantity !== undefined && quantity !== null) {
            newItemData.quantity = quantity;
        }

        const newItem = new Item(newItemData);

        await newItem.save();

        // الآن بعد إضافة الـ Item، نقوم بإضافته إلى الـ Menu حسب الفئة
        const menu = await Menu.findOne();
        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }

        // البحث عن الـ Category المناسبة
        let categoryFound = menu.categories.find(cat => cat.title === category);

        if (!categoryFound) {
            // إذا لم تكن الفئة موجودة، نضيفها
            if (!category || typeof category !== "string" || category.trim() === "") {
                return res.status(400).json({ message: "Category title cannot be empty when creating a new category." });
            }
            categoryFound = {
                title: category.trim(),
                items: [newItem._id],
            };
            menu.categories.push(categoryFound);
        } else {
            // إذا كانت الفئة موجودة، نضيف المنتج إلى الفئة
            categoryFound.items.push(newItem._id);
        }

        await menu.save();

        res.status(201).json({
            message: "Product added successfully and categorized",
            data: newItem,
        });
    } catch (error) {
        res.status(500).json({ message: "Error adding item", error: error.message });
    }
});

route.get("/list", async (req, res) => {

    try {
        const menu = await Menu.findOne().populate("categories.items");
        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }

        const formatted = menu.categories.map(category => ({
            category: category.title,
            items: category.items.map(p => ({
                name: p.name,
                photo: p.photo,
                price: p.price,
                quantity: p.quantity,
            }))
        }));

        res.status(200).json({
            message: "Products listed by category",
            menu: formatted
        });

    } catch (error) {
        return res.status(500).json({ message: "Error listing products", error: error.message });
    }
});

route.put("/update/:productName", auth, authRole("admin"), async (req, res) => {
    try {
        const oldProductName = req.params.productName;
        const updates = req.body;

        const oldProduct = await Item.findOne({ name: oldProductName });
        if (!oldProduct) {
            return res.status(404).json({ message: `Product "${oldProductName}" not found.` });
        }

        const originalCategoryTitle = oldProduct.category; // Store original category title from the item itself

        const updatedProduct = await Item.findOneAndUpdate(
            { name: oldProductName },
            updates, // req.body
            { new: true, runValidators: true } // Ensure validators run for the Item update
        );

        if (!updatedProduct) {
            return res.status(500).json({ message: "Failed to update product details, possibly due to validation issues with the item itself." });
        }

        const menu = await Menu.findOne();
        if (!menu) {
            return res.status(404).json({ message: "Menu not found." });
        }

        const newCategoryTitle = updatedProduct.category; // Category title after item update

        // If the category of the item has changed, remove it from the old category in the menu
        if (originalCategoryTitle && originalCategoryTitle !== newCategoryTitle) {
            const oldCategoryInMenu = menu.categories.find(cat => cat.title === originalCategoryTitle);
            if (oldCategoryInMenu) {
                oldCategoryInMenu.items.pull(updatedProduct._id); // Use pull for direct removal
            }
        }

        // Add/Move item to the new/current category in the menu
        // The Item model's 'category: { required: true }' ensures newCategoryTitle is a valid string.
        let targetCategoryInMenu = menu.categories.find(cat => cat.title === newCategoryTitle.trim());

        if (targetCategoryInMenu) {
            // Category exists, add item if not already there
            if (!targetCategoryInMenu.items.some(itemId => itemId.toString() === updatedProduct._id.toString())) {
                targetCategoryInMenu.items.push(updatedProduct._id);
            }
        } else {
            // Category does not exist, create it (newCategoryTitle should be valid due to Item schema)
            menu.categories.push({
                title: newCategoryTitle.trim(),
                items: [updatedProduct._id]
            });
        }

        await menu.save();

        res.status(200).json({
            message: `Product "${oldProductName}" updated successfully.`,
            product: updatedProduct
        });

    } catch (error) {
        return res.status(500).json({ message: "Error updating product", error: error.message });
    }
});

//to can use this route file in the server.js file
module.exports = route;

