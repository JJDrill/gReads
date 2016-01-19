var express = require('express');
var router = express.Router();
var db_Authors = require('../db/db_authors');

router.get('/', function(req, res){
  db_Authors.Get_Author_List().then(function(list){
    res.render('authors', { pageData: {authorList : list} });
  });
});

module.exports = router;
