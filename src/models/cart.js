const { error } = require('jquery');
const mongoose = require('mongoose');
const validator  = require("validator")

const userschema = mongoose.Schema({
    
    email:{
        type:String,
        requried:true,
        validator(value){
            if(!validator.isEmail(value))
            throw new Error("Invalid Email ID");
        },
        cart:{
            type:String


        }
    }
})

//collection
const cartinfo = mongoose.model("cart_info",userschema);
module.exports = cartinfo;