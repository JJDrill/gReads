var express = require('express');
var router = express.Router();
var db_Books = require('../db/db_books');

router.get('/list', function(req, res){
  db_Books.Get_Book_List().then(function(list){
    res.render('books', { pageData: {bookList : list} });
    // res.send(list);
  });
});

module.exports = router;
