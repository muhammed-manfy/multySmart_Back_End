const Offer_Model = require('../models/Offer.js');

exports.getOffers = async (req, res) => {
    try{
        const offers = await Offer_Model.find({});
        res.status(200).json(offers);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.updateOffer = async (req, res) => {
    
    const id = req.params.id;
    
    await Offer_Model.findByIdAndUpdate( id , {
        title: req.body.title,
        priceAndPeriod: req.body.priceAndPeriod,
        features: req.body.features,
        updated_at: Date.now()
    })
        .then(() => {
            res.status(200).json({
                message: "Updated Successful!"
            });
        }).catch((err) => {
            res.status(500).json(err);
    });
  }

exports.deleteOffer = async (req, res) => {
    const id = req.params.id;

    await Offer_Model.findByIdAndDelete(id).exec()
        .then(() => {
            res.status(200).json({
                message: "Deleted Successful!"
            });
        }).catch((error) => {
            res.status(501).json(error);
        })
}

exports.createOffer = async (req, res) => {
    const offer = new Offer_Model({
        title: req.body.title,
        priceAndPeriod: req.body.priceAndPeriod,
        features: req.body.features,
        created_at: Date.now()
    });

    try{
       await offer.save();
       res.status(201).json({
           message:"Created Successfully!"
       })    
    }catch(err){
        res.status(501).json(err);
    }
    
}
