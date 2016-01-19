
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_authors', function(table){
    table.increments().primary();
    table.integer('Book_ID').notNullable().references('id').inTable('books');
    table.integer('Author_ID').notNullable().references('id').inTable('authors');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book_authors');
};
