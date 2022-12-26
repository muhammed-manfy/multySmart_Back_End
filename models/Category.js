const mongoose = require("mongoose");
const Category_Schema = mongoose.Schema({
    category:{
       type:String
    },
});

module.exports = mongoose.model("Category",Category_Schema);
