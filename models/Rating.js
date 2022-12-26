const mongoose = require("mongoose");
const Rating_Schema = mongoose.Schema({
    rating:Number
    ,
    productName:String
    ,
    products:[String]
});

module.exports = mongoose.model("Rating",Rating_Schema);
