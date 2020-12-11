// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Project = require('./model');

router.post('/', (req, res) => {
    if(!req.body.project_name) {
        res.status(400).json({ message: 'Project must have a name' });
    }
    const newProject = req.body;
    Project.create(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

router.get('/', (req, res) => {
    Project.getAll()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;