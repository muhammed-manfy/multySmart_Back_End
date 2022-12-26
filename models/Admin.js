const mongoose = require("mongoose");
const Admin_Schema = mongoose.Schema({
    username:String
    ,
    password:String
    ,
    imageUrl:String
    ,
    email:String
    ,
    phone:String
    ,
    address:String
    ,
    daysOpen:String
    ,
    timeOpen:String
    ,
    customers:Number
    ,
    Partners:Number
    ,
    workProjects:Number
    ,
    created_at:Date
    ,
    updated_at:Date
});

module.exports = mongoose.model("Admin",Admin_Schema);
