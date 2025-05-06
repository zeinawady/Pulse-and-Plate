const mongoose=require('mongoose')
const User=require('./models/user.JS')
const Item=require('./models/item.JS')
const Order=require('./models/order.JS')
const Admin =require('./models/Admin.JS')
const Menu=require('./models/Menu.JS')

//first writing the code that will be connecting with the mongo atlas server 
mongoose.connect(
  "mongodb+srv://esraa:esraa@pulseandplasedb.veodylk.mongodb.net/"

)
.then (() =>{//if it is connected success
  console.log("connected to the mongo atlas server is successful ");
})
.catch((error) =>{
console.log("connected to the mongo atlas server is failed ");
})



const newUser = new User({
  Name: 'Habiba2 Adel',
  email: 'batmanin2aman@gmail.com',
  password: '7asbe_allah2_fe_elkolea',
});
//now we need to save this user data into the chuseter database atlas
newUser.save()
  .then(() => console.log('User created successfully'))
  .catch(err => console.log('Error creating user:', err));




const newItem = new Item({
    name: 'Salad fruits2',
    photo: 'http://example.com/salad.jpg',
    description: 'Healthy green salad',
    calories: 200,
    category: 'Vegetarian',
    price:85,
  });
  newItem.save()
    .then(() => console.log('Item created successfully'))
    .catch(err => console.log('Error creating item:', err));

   

    const newOrder = new Order({
      user: newUser._id,  // Assuming this is the ID of the user inserted above
      item: newItem._id,  // Assuming this is the ID of the item inserted above
      happenedAt: new Date(),
    });
    
    newOrder.save()
      .then(() => console.log('Order created successfully'))
      .catch(err => console.log('Error creating order:', err));




const newAdmin = new Admin({
  Name: 'esraa5 ahmed',
  email: 'batmanin5aman@gmail.com',
  password: '7asbe_allah5_fe_elkolea11',
  role:"Admin"
});

newAdmin.save()
  .then(() => console.log('Admin created successfully'))
  .catch(err => console.log('Error creating admin:', err));


  const newMenu = new Menu({
    title: "Pulse and Plate Menu - Summer",
    items: 
      {
        Name: "Grilled Chicken Breast",
        photo: "https://example.com/images/grilled-chicken.jpg",
        description: "Lean grilled chicken breast with herbs and lemon",
        price: 85,
        calories: 320,
        category: "Protein",
        available: true
      },

  });
  
  newMenu.save()
    .then(() => console.log("Menu with multiple items saved successfully"))
    .catch((err) => console.log("Error saving menu:", err));
