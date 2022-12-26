const express = require("express");
const router = express.Router();
const brandController = require('../controllers/brandController.js')

// get Brands  
router.get('/',brandController.getBrands);

// paginatoin Brands  
router.post('/pagination',brandController.brandsPagination);


// update a brand
router.put('/update/:id',brandController.updateBrand);

// delete a brand
router.delete('/delete/:id',brandController.deleteBrand);

//  create a Brand..
router.post('/create',brandController.createBrand);

module.exports = router;