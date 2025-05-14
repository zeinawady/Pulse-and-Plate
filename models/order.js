
//define the library we will need 
const mongoose = require('mongoose')

//now the second thing is to make an object from the schema table
const schema = mongoose.Schema

//now the third thing is to start define the order schema
const orderSchema = new schema({
  //for each collecion the mongo define a unique id for each object in this collection and maybe there is 
  //2 objects from different collections have the same object is normally 
  //if the order id will be display to the user to will be handles otherwise we will not need it 
  // orderNumber:{
  // type:String,
  // unique:true,
  // },
  //now there is an user make this order
  userId: {
    type: Number,
    required: true
  },
  //and this order is on specific item 
  item: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Item'
  },
  happenedAt: {
    type: Date,
    default: Date.now
  }
});


//now make the model of this defines schema to can be treat with it in other files
module.exports = mongoose.model('Order', orderSchema)
