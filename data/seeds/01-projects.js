
exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex('projects').insert([
      {id: 1, name: 'Set up holiday party', description: 'Office party for the holidays', completed: false},
      {id: 2, name: 'Karaoke night', description: 'Singing all around', completed: false}
    ]);
};
