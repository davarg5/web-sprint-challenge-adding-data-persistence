// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    create,
    getAll
};

async function create(task) {
    const newId = await db('tasks').insert(task);
    return db('tasks').where('task_id', newId);
}

function getAll() {
    return db('tasks');
}