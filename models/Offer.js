const mongoose = require("mongoose");
const Offer_Schema = mongoose.Schema({
    title:String
    ,
    priceAndPeriod:String
    ,
    features:[String]
    ,
    created_at:Date
    ,
    updated_at: Date
});

module.exports = mongoose.model("Offer",Offer_Schema);
