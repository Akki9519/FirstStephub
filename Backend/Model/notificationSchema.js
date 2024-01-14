const mongoose=require('mongoose');

const notification=mongoose.Schema(
    {
        userID:{
            type:String
        },
        message:{
            type:String
        },
        timeStamp:{
            type:String
        }
    }
);

module.exports=new mongoose.model('notification',notification);