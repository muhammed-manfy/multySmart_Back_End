const Product_Model = require('../models/Product.js');

exports.getProduct = async (req, res) => {
    try {
        const products = await Product_Model.find().exec();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateProduct = async (req, res) => {

    const url = req.protocol + '://' + req.get("host");
    const files = req.files; 
    const imagesList = Array();
    for (let index = 0; index < files.length; index++) {
        imagesList.push(url + '\\' + files[index].path);
    }
    const id = req.params.id;
    try {
        await Product_Model.findByIdAndUpdate(id, {
            productName: req.body.productName,
            description: req.body.description,
            price: req.body.price,
            savePrice: req.body.savePrice,
            images: imagesList,
            features: req.body.features,
            category: req.body.category,
            brand: req.body.brand,
            updated_at: Date.now()
        })
        res.status(201).json({
            message: "Created Successfully!"
        });
    } catch (error) {
        res.status(501).json(error)
}


    await Product_Model.findByIdAndUpdate(id, {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        savePrice: req.body.savePrice,
        features: req.body.features,
        category: req.body.category,
        brand: req.body.brand,
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

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;

    await Product_Model.findByIdAndDelete(id).exec()
        .then(() => {
            res.status(200).json({
                message: "Deleted Successful!"
            });
        }).catch((error) => {
            res.status(501).json(error);
        })
}

exports.createProduct = async (req, res) => {

    const url = req.protocol + '://' + req.get("host");

    const files = req.files;

    const imagesList = Array();
    for (let index = 0; index < files.length; index++) {
        imagesList.push(url + '\\' + files[index].path);
    }

    const product = new Product_Model({
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        savePrice: req.body.savePrice,
        images: imagesList,
        features: req.body.features,
        category: req.body.category,
        brand: req.body.brand,
        created_at: Date.now()
    });

    try {
        await product.save();
        res.status(201).json({
            message: "Created Successfully!"
        });
    } catch (err) {
        res.status(501).json(err)
    }
}

exports.productsPagination = async(req,res)=>{
    const pageSize = parseInt(req.body.pageSize);
    const currentPage = parseInt(req.body.currentPage);

    try{
        const totalProducts = await (await Product_Model.find()).length;
        const products = await Product_Model.find().skip(pageSize * currentPage).limit(pageSize);
            res.status(200).json({
                products:products,
                totalProducts:totalProducts
            });
    }catch(error){
        res.status(500).json(error)
    }
}