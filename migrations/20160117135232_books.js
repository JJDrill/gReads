
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments().primary();
    table.string('Title').notNullable().unique();
    table.string('Genre').notNullable().references('Genre').inTable('book_genre');
    table.text('Description');
    table.string('Book_Cover_URL').notNullable();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
