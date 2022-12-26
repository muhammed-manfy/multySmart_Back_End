const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController.js')
const productMiddleware = require('../middelware/upload.js');
const uploadProduct = productMiddleware.uploadProduct;
// get video  
router.get('/',productController.getProduct);
// video Pagination  
router.post('/pagination',productController.productsPagination);

// update a video 
router.put('/update/:id',uploadProduct.array('images',5),productController.updateProduct);

// delete a video 
router.delete('/delete/:id',productController.deleteProduct);

// create a video
router.post('/create',uploadProduct.array('images',5),productController.createProduct);

module.exports = router;