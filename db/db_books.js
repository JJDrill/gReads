var knex = require('../db/knex');

function Books(){
  return knex('books')
};

function getBookList(orderByField, orderByDirection){
  orderByField = orderByField || 'Title';
  orderByDirection = orderByDirection || 'asc';
  return Books().select().orderBy(orderByField, orderByDirection)
};

function addBook(title, genre, coverImageUrl, description){
  return Books().insert({
    Title: title,
    Genre: genre,
    Description: description,
    Book_Cover_URL: coverImageUrl
  }, 'id')
};

function deleteBook(id){
  return Books()
         .where('id', id)
         .del()
};

module.exports = {
  Get_Book_List: function(orderByField, orderByDirection){
    return getBookList(orderByField, orderByDirection)
  },

  Add_Book: function(title, genre, coverImageUrl, description){
    return addBook(title, genre, coverImageUrl, description)
  },

  Delete_Book: function(id){
    return deleteBook(id)
  }
}
