
exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex('projects').insert([
      {project_id: 1, project_name: 'Set up holiday party', project_description: 'Office party for the holidays', completed: false},
      {project_id: 2, project_name: 'Karaoke night', project_description: 'Singing all around', completed: false}
    ]);
};
