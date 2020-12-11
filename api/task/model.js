// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    create,
    getAll
};

async function create(task) {
    const newId = await db('tasks').insert(task);
    return db('tasks').where('id', newId)
        .then(tasks => {
            return tasks.map(task =>  {
                return {...task,
                    completed: task.completed ===  1
                }
            })
        })
}

function getAll() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')    
        .then(tasks => {
            return tasks.map(task =>  {
                return {...task,
                    completed: task.completed ===  1 
                }
            })
        })
}