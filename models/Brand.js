const mongoose = require("mongoose");
const Brand_Schema = mongoose.Schema({
    brand:{
        type:String
    },
    created_at:Date,
    updated_at:Date
});

module.exports = mongoose.model("Brand",Brand_Schema);
