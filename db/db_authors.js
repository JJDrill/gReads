var knex = require('../db/knex');

function Authors(){
  return knex('authors')
};

function getAuthorList(){
  return Authors().select()
};

module.exports = {
  Get_Author_List: function(){
    return getAuthorList()
  }
}
