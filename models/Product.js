const mongoose = require("mongoose");
const Product_Schema = mongoose.Schema({
    
    productName:{
        type:String
    },
    price:{
        type:Number
    }   
    ,
    images:[{
        type:String
    }]
    ,
    savePrice:{
        type:Number
    }
    ,
    description:{
        type:String
    }
    ,
    features:[{
        type:String
    }]
    ,
    brand:{
        type:String
    }
    ,
    category:{
        type:String
    }
    ,
    created_at:Date
    ,
    updated_at:Date
});

module.exports = mongoose.model("Product",Product_Schema);
