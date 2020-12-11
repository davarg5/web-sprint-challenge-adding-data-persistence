// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    create,
    getAll
};

async function create(project) {
    const newId = await db('projects').insert(project);
    return db('projects').where('id', newId)
    .then(projects => {
        return projects.map(project =>  {
            return {...project,
                completed: project.completed ===  1 ? true : false
            }
        })
    })
}

function getAll() {
    return db('projects')
        .then(projects => {
            return projects.map(project =>  {
                return {...project,
                    completed: project.completed ===  1 ? true : false
                }
            })
        })
}