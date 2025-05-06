const mongoose = require ("mongoose")

const bcrypt = require("bcrypt")

const schema = mongoose.Schema

const AdminSchema = new schema({
Name:{
type:String,
required:true,
unique:true
},
email:{
type:String,
required:true,
unique:true
},
password:{
type:String,
required:true,
},
registeredAt:{
type:Date,
default:Date.now
},
role:{
    type:String,
    required:true
},
active:{
    type:Boolean,
    default:true
}

});

AdminSchema.pre("save",async function(next)
{
    if(this.isModified("password"))
    {
        const salted_string = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password , salted_string);
        next();
    }
    else
    {
        return next();
    }
     
})
module.exports = mongoose.model('Admin',AdminSchema);