const Comment_Model = require('../models/Comment.js');

exports.getComments = async (req, res) => {
    await Comment_Model.find({}, (error, comments) => {
        if (!error) {
            if (comments.length > 0) {
                res.status(200).json(comments);
            } else {
                res.status(200).json({ replay: "Not Found!" });
            }
        } else {
            res.status(500).json(error);
        }
    }).exec();

}

exports.deleteComment = async (req, res) => {
    const id = req.params.id;

    await Comment_Model.findByIdAndDelete(id).exec()
        .then(() => {
            res.status(200).json({
                message: "Deleted Successful!"
            });
        }).catch((error) => {
            res.status(501).json(error);
        })
}

exports.createComment = async (req, res) => {
    const comment = new Comment_Model({
        username: req.body.username,
        email: req.body.email,
        title: req.body.title,
        comment: req.body.comment,
        productName:req.body.productName,
        created_at: Date.now()
    });
    const newComment = comment.save();
    await newComment.then((commentInfo) => {
        res.status(201).json(commentInfo);
    }).catch((error) => {
        res.status(501).json(error);
    });
}
