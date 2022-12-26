const express = require("express");
const router = express.Router();
const projectController = require('../controllers/projectController.js') 
const imageMiddleware = require('../middelware/upload.js');
const projectUpload = imageMiddleware.uploadProject;

// get Projects  
router.get('/', projectController.getProjects);

//  update a Project 
router.put('/update/:id',projectUpload.single('image'),projectController.updateProject);

//  delete a Project 
router.delete('/delete/:id', projectController.deleteProject);

//  create a Project
router.post('/create',projectUpload.single('image'),projectController.createProject);

module.exports = router;