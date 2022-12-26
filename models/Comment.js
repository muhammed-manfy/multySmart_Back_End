const mongoose = require("mongoose");

const Comment_Schema = mongoose.Schema({
    username:String
    ,
    email:String
    ,
    title:String
    ,
    comment:String
    ,
    productName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }
    ,
    created_at:{
        type : Date
    }
});

module.exports = mongoose.model("Comment",Comment_Schema);
