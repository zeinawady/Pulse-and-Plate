const mongoose = require('mongoose')

const schema = mongoose.Schema




const MenuSchema = new schema({
    title:
    {
      type: String,
      default: 'Pulse and Plate Menu'
    },
    item:
    {
    type:mongoose.Schema.ObjectId,
     ref: 'item'
    }
  });
  
  module.exports = mongoose.model('Menu', MenuSchema);