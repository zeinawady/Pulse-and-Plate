//this file will having all functions that will be treated with the product and with integerating the urls with the function logic in the same place
//rather than define another controller foldre and it will be having only the code implementation logic only and the route having the urls only 
/*
- add a product 
- delete a product 
- list all products
- update specific product

*/

const express = require('express')
const route = express.Router()
const Item= require('../models/item')

//first lets handle the delete product logic function 

route.delete('/:productName',async(req,res)=>{
//and then now taking the paramter to can get the product id first 
const productname=req.params.productName
//there is a built in library in mongoose that help us to find the first element with this value in the db and delete it from there

if(!productname)//it means empty
{return res.status(400).json({ message: "Product name is required." });}

const findingtheproduct = await Item.findOneAndDelete({ name: productname });

if (!findingtheproduct) //it means this product name is not in the db
{return res.status(404).json({ message: `Product with name "${productname}" not found.` });}

//otherwise so it is found and it is deleted successfully so return 200 as a response code
res.status(200).json({ message: `Product "${productname}" deleted successfully.`});

})








//to can use this route file in the server.js file
module.exports = router;

