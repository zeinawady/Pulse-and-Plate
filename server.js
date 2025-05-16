const mongoose = require('mongoose')
// const User=require('./user')
// const Item=require('./models/item.JS')
// const Order=require('./models/order.JS')
// const Admin =require('./models/Admin.JS')
// const Menu=require('./models/Menu.JS')

const express = require("express")
const cors = require('cors');


//const cors = require("cors")

// const authRoutes = require('./routes/authentication')
const userRoutes = require('./routes/user')
// console.log("Registering Product routes at /api/product");
const Product = require('./routes/product');
const orders = require('./routes/order');
// const adminRoutes = require('./routes/admin')


const PORT = 3050;
const MONGO_URI = "mongodb+srv://esraa:esraa@pulseandplasedb.veodylk.mongodb.net/pulseandplateDB?retryWrites=true&w=majority";
const JWT_SECRET = "your_jwt_secret"


const app = express()
app.use(cors()); // Enable CORS if using a frontend like React
// Middleware
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));





//first writing the code that will be connecting with the mongo atlas server 
// mongoose.connect(
//   "mongodb+srv://esraa:esraa@pulseandplasedb.veodylk.mongodb.net/"

// )

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then (() =>{
  console.log("connected to the mongo atlas server is successful ");

   app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch((error) =>{
console.log("connected to the mongo atlas server is failed ");
})

// app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/product', Product);
app.use('/api/addorder', orders);



// app.use('/api/admin', adminRoutes);



// const newUser = new User({
//   Name: 'Habiba2 Adel',
//   email: 'batmanin2aman@gmail.com',
//   password: '7asbe_allah2_fe_elkolea',
// });
// //now we need to save this user data into the chuseter database atlas
// newUser.save()
//   .then(() => console.log('User created successfully'))
//   .catch(err => console.log('Error creating user:', err));




// const newItem = new Item({
//     name: 'Salad fruits2',
//     photo: 'http://example.com/salad.jpg',
//     description: 'Healthy green salad',
//     calories: 200,
//     category: 'Vegetarian',
//     price:85,
//   });
//   newItem.save()
//     .then(() => console.log('Item created successfully'))
//     .catch(err => console.log('Error creating item:', err));

   

//     const newOrder = new Order({
//       user: newUser._id,  // Assuming this is the ID of the user inserted above
//       item: newItem._id,  // Assuming this is the ID of the item inserted above
//       happenedAt: new Date(),
//     });
    
//     newOrder.save()
//       .then(() => console.log('Order created successfully'))
//       .catch(err => console.log('Error creating order:', err));




// const newAdmin = new Admin({
//   Name: 'esraa5 ahmed',
//   email: 'batmanin5aman@gmail.com',
//   password: '7asbe_allah5_fe_elkolea11',
//   role:"Admin"
// });

// newAdmin.save()
//   .then(() => console.log('Admin created successfully'))
//   .catch(err => console.log('Error creating admin:', err));


//   const newMenu = new Menu({
//     title: "Pulse and Plate Menu - Summer",
//     items: 
//       {
//         Name: "Grilled Chicken Breast",
//         photo: "https://example.com/images/grilled-chicken.jpg",
//         description: "Lean grilled chicken breast with herbs and lemon",
//         price: 85,
//         calories: 320,
//         category: "Protein",
//         available: true
//       },

//   });
  
//   newMenu.save()
//     .then(() => console.log("Menu with multiple items saved successfully"))
//     .catch((err) => console.log("Error saving menu:", err));
