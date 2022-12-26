const express = require("express");
const router = express.Router();
const videoController = require('../controllers/videoController.js')
const videoMiddleware = require('../middelware/upload.js');
const videoUpload = videoMiddleware.uploadVideo;
// get video  
router.get('/',videoController.getVideos);

// get last Three Vidoes

router.get('/lastVideos',videoController.getLastVideos);

// update a video 
router.put('/update/:id',videoUpload.single('video'),videoController.updateVideo);

// delete a video 
router.delete('/delete/:id',videoController.deleteVideo);

// create a video
router.post('/create',videoUpload.single('video'),videoController.createVideo);

module.exports = router;