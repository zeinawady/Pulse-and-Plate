//this file will having all functions that will be treated with the product and with integerating the urls with the function logic in the same place
//rather than define another controller foldre and it will be having only the code implementation logic only and the route having the urls only 
/*
- add a product 
- delete a product 
- list all products
- update specific product

*/
console.log("routes/product.js file is being executed");
const express = require('express')
const route = express.Router()
const Item = require('../models/item')
const Menu = require('../models/Menu');

//first lets handle the delete product logic function 

route.delete('/:productName', async (req, res) => {
    //and then now taking the paramter to can get the product id first 
    const productname = req.params.productName
    //there is a built in library in mongoose that help us to find the first element with this value in the db and delete it from there

    if (!productname)//it means empty
    { return res.status(400).json({ message: "Product name is required." }); }

    const findingtheproduct = await Item.findOneAndDelete({ name: productname });

    if (!findingtheproduct) //it means this product name is not in the db
    { return res.status(404).json({ message: `Product with name "${productname}" not found.` }); }

    //otherwise so it is found and it is deleted successfully so return 200 as a response code
    res.status(200).json({ message: `Product "${productname}" deleted successfully.` });

})

route.post('/add-item', async (req, res) => {
    try {
        const { name, price, image, description, calories, category } = req.body;

        // Basic validation
        if (!name || !price || !image || !category) {
            return res.status(400).json({ message: "Complete the product missing info" });
        }

        // Check if product already exists
        const existingProduct = await Item.findOne({ name });

        if (existingProduct) {
            return res.status(409).json({ message: "Product already added" });
        }

        // Create new item
        const newItem = new Item({
            name,
            photo: image,
            price,
            description,
            calories,
            category
        });

        await newItem.save();

        // الآن بعد إضافة الـ Item، نقوم بإضافته إلى الـ Menu حسب الفئة
        const menu = await Menu.findOne();
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }

        // البحث عن الـ Category المناسبة
        let categoryFound = menu.categories.find(cat => cat.title === category);

        if (!categoryFound) {
            // إذا لم تكن الفئة موجودة، نضيفها
            categoryFound = {
                title: category,
                meals: [newItem._id]
            };
            menu.categories.push(categoryFound);
        } else {
            // إذا كانت الفئة موجودة، نضيف المنتج إلى الفئة
            categoryFound.meals.push(newItem._id);
        }

        await menu.save();

        res.status(201).json({
            message: "Product added successfully and categorized",
            data: newItem
        });

    } catch (error) {
        res.status(500).json({ message: "Error adding item", error: error.message });
    }
});


route.get('/list', async (req, res) => {
    try {
        const menu = await Menu.findOne().populate('categories.products');
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }

        const formatted = menu.categories.map(category => ({
            category: category.name,
            products: category.products.map(p => ({
                name: p.name,
                photo: p.photo,
                price: p.price
            }))
        }));

        res.status(200).json({
            message: 'Products listed by category',
            menu: formatted
        });

    } catch (error) {
        return res.status(500).json({ message: "Error listing products", error: error.message });
    }
});



route.put('/update/:productName', async (req, res) => {
    try {
        const oldProductName = req.params.productName;
        const updates = req.body;


        const oldProduct = await Item.findOne({ name: oldProductName });
        if (!oldProduct) {
            return res.status(404).json({ message: `Product "${oldProductName}" not found.` });
        }

        const updatedProduct = await Item.findOneAndUpdate(
            { name: oldProductName },
            updates,
            { new: true }
        );


        const menu = await Menu.findOne();
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found.' });
        }


        const oldCategory = menu.categories.find(cat => cat.name === oldProduct.category);
        if (oldCategory) {
            oldCategory.products = oldCategory.products.filter(
                productId => productId.toString() !== oldProduct._id.toString()
            );
        }


        const newCategory = menu.categories.find(cat => cat.name === updatedProduct.category);
        if (newCategory) {
            if (!newCategory.products.includes(updatedProduct._id)) {
                newCategory.products.push(updatedProduct._id);
            }
        } else {


            menu.categories.push({
                name: updatedProduct.category,
                products: [updatedProduct._id]
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

