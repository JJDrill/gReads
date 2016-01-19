
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
    table.increments().primary();
    table.string('First_Name').notNullable();
    table.string('Last_Name').notNullable();
    table.text('Biography');
    table.string('Portrait_URL');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
