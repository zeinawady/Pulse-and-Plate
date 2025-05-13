const mongoose = require('mongoose')

const schema = mongoose.Schema




const MenuSchema = new schema({
    title:
    {
      type: String,
      default: 'Pulse and Plate Menu'
    },
    item: [
      {
        type: mongoose.Schema.ObjectId,
        //  It's Item not item!!!!!!!!!!!
        // ref: "item", THIS ISSSS WORNGGGG
        ref: "Item,",
      },
    ]
  
  });
  
  module.exports = mongoose.model('Menu', MenuSchema);