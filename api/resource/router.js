// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

const Resource = require('./model');

router.post('/', (req, res) => {
    if(!req.body.name) {
        res.status(400).json({ message: 'Resource must have a name' });
    }
    else {
        const newResource = req.body;
        Resource.create(newResource)
            .then(resource => {
                res.status(201).json(resource[0]);
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    }
});

router.get('/', (req, res) => {
    Resource.getAll()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;