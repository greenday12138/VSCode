var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = 'select * from `article`';
  db.DBConnection.query(sql, function (err, rows, fields) {
    var articles = rows;
    res.render('index', { title: 'Index', articles: articles, user: req.session.user });
  })
});

//delete selected blog
router.all('/:articleID', function (req, res, next) {
  var sql = {
    sql: 'delete from `article` where articleID = ?',
    values: [req.params.articleID]
  };
  console.log(req.session.user);
  db.DBConnection.query(sql, function (err, rows, fields) {
    if (err) {
      console.error(err);
      return;
    }

    res.redirect('/index');
  });
})

//display blog
router.get('/article/:articleID',function(req,res,next){
  var sql={
      sql:'select * from `article` where articleID = ?',
      values:[req.params.articleID]
  }
  db.DBConnection.query(sql,function(err,rows,fields){
      if(err){
          console.error(err);
          return;
      }
      res.render('article',{article:rows[0],user:req.session.user});
  })
})
module.exports = router;