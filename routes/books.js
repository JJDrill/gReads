var express = require('express');
var router = express.Router();
var db_Books = require('../db/db_books');

router.get('/:id', function(req, res){
  if (req.params.id === "new") {
    res.render('addBooks');

  } else {
    db_Books.Get_Book(req.params.id).then(function(book){
      var list = [];
      list.push(book);
      res.render('books', { pageData: {bookList : list} });
    });
  }
});

router.get('/', function(req, res){
  db_Books.Get_Book_List().then(function(list){
    res.render('books', { pageData: {bookList : list} });
  });
});

router.post('/new', function(req, res){
  db_Books.Add_Book(req.body.title,
                    req.body.genre,
                    req.body.coverImageUrl,
                    req.body.description)
  .then(function(id){
    res.redirect('/');
  })
});

router.get('/delete/:id', function(req, res){
  db_Books.Delete_Book(req.params.id)
  .then(function(){
    res.redirect('/books/');
  })
});

router.get('/:id/edit', function(req, res){
  db_Books.Get_Book(req.params.id).then(function(book){
    res.render('editBook', {
      bookId: book.id,
      bookTitle: book.Title,
      bookGenre: book.Genre,
      bookImage: book.Book_Cover_URL,
      bookDescription: book.Description
    });
  })
});

router.post('/:id/edit', function(req, res){
  db_Books.Update_Book(req.body.bookId,
                    req.body.title,
                    req.body.genre,
                    req.body.coverImageUrl,
                    req.body.description)
  .then(function(){
    res.redirect('/books/');
  })
});

module.exports = router;
