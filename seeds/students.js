
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('students').insert({id: 1, firstName: 'Sandarbh', lastName:'Kapur'}),
        knex('students').insert({id: 2, firstName: 'Saurav', lastName:'Kapur'}),
        knex('students').insert({id: 3, firstName: 'Amit', lastName:'Kumar'}),
        knex('students').insert({id: 4, firstName: 'David', lastName:'Hernquist'})
      ]);
    });
};
