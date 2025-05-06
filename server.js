const mongoose=require('mongoose')
const Item=require('./models/item.JS')
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

const newItem = new Item({
    name: 'Salad fruits',
    photo: 'http://example.com/salad.jpg',
    description: 'Healthy green salad',
    calories: 200,
    category: 'Vegetarian',
    price:85,
  });
  newItem.save()
    .then(() => console.log('Item created successfully'))
    .catch(err => console.log('Error creating item:', err));

   

const newAdmin = new Admin({
  Name: 'esraa4 ahmed',
  email: 'batmanin4aman@gmail.com',
  password: '7asbe_allah4_fe_elkolea11',
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
