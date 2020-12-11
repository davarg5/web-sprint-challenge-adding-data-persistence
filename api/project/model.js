// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    create,
    getAll
};

async function create(project) {
    const newId = db('projects').insert(project);
    return db('projects').where('project_id', newId);
}

function getAll() {
    return db('projects');
}