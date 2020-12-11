
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {id: 1, name: 'conference room', description: 'room for conferences and activities'},
    {id: 2, name: 'candy canes', description: 'sweets'},
    {id: 3, name: 'fake snow', description: 'basically powder'},
    {id: 4, name: 'microphone', description: 'to make voice louder'},
    {id: 5, name: 'television', description: 'to play the songs'}
  ]);
};
