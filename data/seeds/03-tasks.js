
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {id: 1, description: 'Send out invites', notes: 'not over 30 people', completed: true, project_id: 1},
    {id: 2, description: 'Decorate conference room', notes: 'make it look nice', completed: false, project_id: 1},
    {id: 3, description: 'Buy candy canes', notes: 'red and white ones', completed: true, project_id: 1},
    {id: 4, description: 'Set up the television', notes: 'youtube preferred', completed: false, project_id: 2},
    {id: 5, description: 'Make sure there are enough chairs', notes: 'at least 20', completed: false, project_id: 2},
  ]);
};
