const mongoose = require("mongoose");
const Likes_Schema = mongoose.Schema({
    likeState:Boolean
    ,
    productName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }
});

module.exports = mongoose.model("Likes",Likes_Schema);
