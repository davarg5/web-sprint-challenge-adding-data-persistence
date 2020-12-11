// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();

const Task = require('./model');

router.post('/', (req, res) => {
    if(!req.body.task_description || !req.body.project_id) {
        res.status(400).json({ message: 'Task must have a description and project id' });
    }
    const newTask = req.body;
    Task.create(newTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

router.get('/', (req, res) => {
    Task.getAll()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;