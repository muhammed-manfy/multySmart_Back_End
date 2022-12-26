const Admin_Model = require('../models/Admin.js');

exports.getAdmin = async (req, res) => {
    await Admin_Model.find({}, (error, admins) => {
        if (!error) {
            if (admins.length > 0) {
                res.status(200).json(admins);
            } else {
                res.status(200).json({ message: "Not Found!" });
            }
        } else {
            res.status(500).json(error);
        }
    }).exec();

}

exports.updateAdmin = async (req, res) => {
    const id = req.params.id;
    await Admin_Model.findByIdAndUpdate(id, {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        imageUrl: req.body.imageUrl,
        phone: req.body.phone,
        address: req.body.address,
        daysOpen: req.body.daysOpen,
        timeOpen: req.body.timeOpen,
        updated_at: Date.now()
    })
        .then(() => {
            res.status(200).json({
                message: "Updated Successful!"
            });
        }).catch((err) => {
            res.status(500).json(err);
        })
}

exports.createAdmin = async (req, res) => {
    const admin = new Admin_Model({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        imageUrl: req.body.imageUrl,
        phone: req.body.phone,
        address: req.body.address,
        daysOpen: req.body.daysOpen,
        timeOpen: req.body.timeOpen,
        created_at: Date.now()
    });
    const newAdmin = admin.save();
    await newAdmin.then((adminInfo) => {
        res.status(201).json(adminInfo);
    }).catch((error) => {
        res.status(501).json(error);
    });
}
