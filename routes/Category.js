const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/categoryController.js')

// get categories
router.get('/',categoryController.getCategories);

//  create a category
router.post('/create',categoryController.crateCategory);

module.exports = router;