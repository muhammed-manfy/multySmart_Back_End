const express = require("express");
const router = express.Router();
const adminController = require('../controllers/adminController.js')
// get a admin  
router.get('/get',adminController.getAdmin);
// update a admin 
router.put('/update/:id',adminController.updateAdmin);
// register a admin
router.post('/register',adminController.createAdmin);
// login a admin
router.post('/login',(requset,response)=>{
    //    
});

module.exports = router;