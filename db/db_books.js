var knex = require('../db/knex');

function Books(){
  return knex('books')
};

function getBookList(orderByField, orderByDirection){
  orderByField = orderByField || 'Title';
  orderByDirection = orderByDirection || 'asc';
  return Books().select().orderBy(orderByField, orderByDirection)
};


module.exports = {
  Get_Book_List: function(orderByField, orderByDirection){
    return getBookList(orderByField, orderByDirection)
  },
}
