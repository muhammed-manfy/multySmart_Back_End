const Video_Model = require('../models/Video.js');

exports.getVideos = async (req, res) => {
    try{
        const videos = await Video_Model.find();
        res.status(200).json(videos);
    }catch(err){
        res.status(501).json(err.message);
    }
}
exports.getLastVideos = async(req,res)=>{
    try{
        const lastThreeVidoes = await (await Video_Model.find().limit(3)).reverse();
        res.status(200).json(lastThreeVidoes); 
    }catch(error){
        res.status(500).json(error);
    }
}

exports.updateVideo = async (req, res) => {
    const url = req.protocol+'://'+req.get("host");
    const id = req.params.id;
    try{
        await Video_Model.findByIdAndUpdate( id , {
            title: req.body.title,
            description: req.body.description,
            video: url + '\\' +req.file.path,
            updated_at: Date.now()
        });
        res.status(200).json({
            message: "Updated Successful!"
        });
    }catch(error){
        res.status(500).json(error);
    }
    
}

exports.deleteVideo = async (req, res) => {
    const id = req.params.id;
    await Video_Model.findByIdAndDelete(id).exec()
        .then(() => {
            res.status(200).json({
                message: "Deleted Successful!"
            });
        }).catch((error) => {
            res.status(501).json(error);
        })
}

exports.createVideo = async (req, res) => {
    const url = req.protocol+'://'+req.get("host");
    const video = new Video_Model({
        title: req.body.title,
        description: req.body.description,
        video: url + '\\' +req.file.path,
        created_at: Date.now()
    });
    try{
        await video.save();
            res.status(201).json({
                message:"Created Successfully!"
            })
    }catch(err){
        res.status(501).json(err.message);
    }
}
