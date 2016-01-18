
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_genre', function(table){
    table.string('Genre').notNullable().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book_genre');
};
