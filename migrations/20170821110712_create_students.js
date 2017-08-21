
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('students',function(table){
      table.increments().primary();
      table.string('firstName');
      table.string('lastName');
      table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
