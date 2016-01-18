var express = require('express');
var router = express.Router();
var db_Books = require('../db/db_books');

router.get('/list', function(req, res){
  db_Books.Get_Book_List().then(function(list){
    res.render('books', { pageData: {bookList : list} });
  });
});

router.get('/new', function(req, res){
  res.render('addBooks');
});

router.post('/new', function(req, res){
  db_Books.Add_Book(req.body.title,
                    req.body.genre,
                    req.body.coverImageUrl,
                    req.body.description)
  .then(function(id){
    res.redirect('list');
  })
});

router.get('/delete/:id', function(req, res){
console.log('found router', req.params.id);
  db_Books.Delete_Book(req.params.id)
  .then(function(){
    res.redirect('/books/list');
  })
});

module.exports = router;
