// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = {
    create,
    getAll
};

async function create(resource) {
    const newId = await db('resources').insert(resource);
    return db('resources').where('resource_id', newId);
}

function getAll() {
    return db('resources');
}