
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {task_id: 1, task_description: 'Send out invites', notes: 'not over 30 people', completed: true, project_id: 1},
    {task_id: 2, task_description: 'Decorate conference room', notes: 'make it look nice', completed: false, project_id: 1},
    {task_id: 3, task_description: 'Buy candy canes', notes: 'red and white ones', completed: true, project_id: 1},
    {task_id: 4, task_description: 'Set up the television', notes: 'youtube preferred', completed: false, project_id: 2},
    {task_id: 5, task_description: 'Make sure there are enough chairs', notes: 'at least 20', completed: false, project_id: 2},
  ]);
};
