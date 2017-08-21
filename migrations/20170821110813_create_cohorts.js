
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cohorts',function(table){
    table.increments().primary();
    table.string('name');
    table.boolean('active')
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts')
};
