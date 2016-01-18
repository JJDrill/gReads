var knex = require('../db/knex');

function Books(){
  return knex('books')
};

function getBookList(orderByField, orderByDirection){
  orderByField = orderByField || 'Title';
  orderByDirection = orderByDirection || 'asc';
  return Books().select().orderBy(orderByField, orderByDirection)
};

function getBook(id){
  return Books().where('id', id).select().first()
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

function updateBook(id, title, genre, coverImageUrl, description){
  return Books()
         .where('id', id)
         .update({
           Title: title,
           Genre: genre,
           Book_Cover_URL: coverImageUrl,
           Description: description
         })
};

module.exports = {
  Get_Book_List: function(orderByField, orderByDirection){
    return getBookList(orderByField, orderByDirection)
  },

  Get_Book: function(id){
    return getBook(id)
  },

  Add_Book: function(title, genre, coverImageUrl, description){
    return addBook(title, genre, coverImageUrl, description)
  },

  Delete_Book: function(id){
    return deleteBook(id)
  },

  Update_Book: function(id, title, genre, coverImageUrl, description){
    return updateBook(id, title, genre, coverImageUrl, description)
  }
}
