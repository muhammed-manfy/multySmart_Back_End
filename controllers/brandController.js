const Brand_Model = require('../models/Brand.js');

exports.getBrands = async (req, res) => {

    try {
        const brands = await Brand_Model.find({}).exec();
        res.status(200).json(brands);
    
    } catch (err) {
        res.status(500).json(err.message);
    }
}
exports.updateBrand = async (req,res)=>{
    const id = req.params.id;
    try{
        await Brand_Model.findByIdAndUpdate(id,{
            brand:req.body.brand,
            updated_at:Date.now()
        });
            res.status(200).json({
                message:"Updated Successfully!"
            })
    }catch(error){
        res.status(500).json(error.message)
    }
}

exports.deleteBrand = async (req,res)=>{
    const id = req.params.id;
    try{
        await Brand_Model.findByIdAndDelete(id);
        res.status(200).json({
            message:"Creared Successfully!"
        })
    }catch(error){
        res.status(500).json(error.message)
    }
}

exports.createBrand = async (req, res) => {
    const brand = new Brand_Model({
        brand: req.body.brand,
        created_at: Date.now()
    });
    try {
        const newBrand = await brand.save();
        res.status(201).json({
            message: "Created Successfully!"
        })

    } catch (err) {
        res.status(501).json(err.message)
    }
}
exports.brandsPagination = async (req,res)=>{
    const pageSize  =parseInt(req.body.pageSize);
    const currentPage = parseInt(req.body.currentPage);
    try{
     const totalBrands = await (await Brand_Model.find()).length;   
     const brands = await Brand_Model.find().skip(pageSize * currentPage).limit(pageSize);
            res.status(200).json({
                brands:brands,
                totalBrands:totalBrands
            });
    }catch(error){
        res.status(500).json(error);
    } 
}