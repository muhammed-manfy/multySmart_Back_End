const Rating_Model = require('../models/Rating.js');

// exports.getOffers = async (req, res) => {
//     await Rating_Model.find({}, (error, offers) => {
//         if (!error) {
//             if (offers.length > 0) {
//                 res.status(200).json(offers);
//             } else {
//                 res.status(200).json({ replay: "Not Found!" });
//             }
//         } else {
//             res.status(500).json(error);
//         }
//     }).exec();

// }


exports.createRating = async (req, res) => {
    const rating = new Rating_Model({
        rating: req.body.rating,
        productName: req.body.productName
    });
    const newRating = await rating.save();
     newRating.then((ratingInfo) => {
        res.status(201).json(ratingInfo);
    }).catch((error) => {
        res.status(501).json(error);
    });
}
