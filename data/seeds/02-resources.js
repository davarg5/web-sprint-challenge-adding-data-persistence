
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {resource_id: 1, resource_name: 'conference room', resource_description: 'room for conferences and activities'},
    {resource_id: 2, resource_name: 'candy canes', resource_description: 'sweets'},
    {resource_id: 3, resource_name: 'fake snow', resource_description: 'basically powder'},
    {resource_id: 4, resource_name: 'microphone', resource_description: 'to make voice louder'},
    {resource_id: 5, resource_name: 'television', resource_description: 'to play the songs'}
  ]);
};
