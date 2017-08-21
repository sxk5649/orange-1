
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('cohorts').insert({id: 1, name:'The Pioneers', active: 'false'}),
        knex('cohorts').insert({id: 2, name:'Falcon 2', active: 'true'}),
        knex('cohorts').insert({id: 3, name:'Hawk 1', active: 'true'})
      ]);
    });
};
