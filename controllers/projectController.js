const Project_Model = require('../models/Project.js');

exports.getProjects = async (req, res) => {

    try {
        const projects = await Project_Model.find({});
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateProject = async (req, res) => {
    
    const url = req.protocol + '://' + req.get("host");
    const id = req.params.id;
        try{
            await Project_Model.findByIdAndUpdate(id, {
                title: req.body.title,
                description: req.body.description,
                image: url + '\\' + req.file.path,
                updated_at: Date.now()
            });
            res.status(200).json({
                message: "Updated Successful!"
            });
        }catch(error){
            res.status(500).json(error);
        }
}

exports.deleteProject = async (req, res) => {
    const id = req.params.id;
    try {
        await Project_Model.findByIdAndDelete(id);
        res.status(200).json({
            message: "Deleted Successfully!"
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.createProject = async (req, res) => {
    const url = req.protocol + '://' + req.get("host");
    const project = new Project_Model({
        title: req.body.title,
        description: req.body.description,
        image: url + '\\' + req.file.path,
        created_at: Date.now()
    });
    try {
         await project.save();
            res.status(201).json({
                message: "Created Successfully!"
        });
    } catch (err) {
        res.status(501).json(err.message)
    }

}
