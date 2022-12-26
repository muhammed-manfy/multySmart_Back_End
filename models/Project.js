const mongoose = require("mongoose");
const Project_Schema = mongoose.Schema({
    title:String
    ,
    description:String
    ,
    image:String
    ,
    created_at: Date
    ,
    updated_at:Date
});

module.exports = mongoose.model("Project",Project_Schema);
