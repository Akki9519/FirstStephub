const { express } = require('express');
const mongoose=require('mongoose');

const cart=mongoose.Schema(
    {
        userID:{
            type:String
        },
        detail:{
            type:Object
        }
    }
);

module.exports=new mongoose.model('cart',cart);