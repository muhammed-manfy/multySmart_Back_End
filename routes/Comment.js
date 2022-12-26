const express = require("express");
const router = express.Router();
const commentController = require('../controllers/commentController.js')

// get messages  
router.get('/',commentController.getComments);
// delete a message 
router.delete('/delete/:id',commentController.deleteComment);
// create a message
router.post('/create',commentController.createComment);

module.exports = router;