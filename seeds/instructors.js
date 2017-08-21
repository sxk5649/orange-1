
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructors').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('instructors').insert({id: 1, firstName: 'Brandon', lastName:'Kearns'}),
        knex('instructors').insert({id: 2, firstName: 'Michael', lastName:'Hopper'}),
        knex('instructors').insert({id: 3, firstName: 'Michael', lastName:'Barringer'}),
        knex('instructors').insert({id: 4, firstName: 'Pat', lastName:'Woowong'})
      ]);
    });
};
