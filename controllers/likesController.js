const Likes_Model = require('../models/Likes.js');

exports.createLike = async (req,res)=>{
    const like = new Likes_Model({
        likeState:req.body.likeState,
        productName:req.body.productName,
    });
    await like.save()
    .then(() => {
        res.status(201).json({
            message:true
        });
    }).catch((err) => {
        res.status(501).json(err);
    });
}