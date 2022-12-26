const mongoose = require("mongoose");
const Video_Schema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        require:true,
    },
    video:{
        type:String,
        required:true,
    },
    created_at:{
        type : Date
    },
    updated_at:{
        type : Date
    }
});

module.exports = mongoose.model("Video",Video_Schema);
