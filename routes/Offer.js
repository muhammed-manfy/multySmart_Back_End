const express = require("express");
const router = express.Router();
const offerController = require('../controllers/offerController.js')

// get Offers  
router.get('/',offerController.getOffers);

//  update a Offer 
router.put('/update/:id',offerController.updateOffer);

//  delete a Project 
router.delete('/delete/:id',offerController.deleteOffer);

//  create a Project
router.post('/create',offerController.createOffer);

module.exports = router;