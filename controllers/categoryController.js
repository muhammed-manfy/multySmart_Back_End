const Category_Model = require('../models/Category.js');

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category_Model.find();
        res.status(200).json(categories);

    } catch (err) {

        res.stat(500).json(err.message);
    }
}
exports.crateCategory = async (req, res) => {
    const category = new Category_Model({
        category: req.body.category
    });
    try {
        await category.save();
        res.status(201).json({
            message: "Created Successful!"
        });
    } catch (err) {
        res.status(501).json(err.message);
    }
}