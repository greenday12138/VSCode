var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var page;
  if (req.query.page === undefined) {
    page = 1;
  } else {
    page = req.query.page || 1;
  }
  var start = (page - 1) * 5;
  var end = page * 5;
  var queryCount = 'select count(*) as num from `article`';
  var queryArticle = {
    sql: 'select * from article order by articleID desc limit ?, ?',
    values: [start, end]
  }

  db.DBConnection.query(queryArticle, function (err, rows, fields) {
    if (err) {
      console.error(err);
      return;
    }
    var articles = rows;

    db.DBConnection.query(queryCount, function (err, rows, fields) {
      if (err) {
        console.error(err);
        return;
      }

      var articleNum = rows[0].num;
      var pageNum = Math.ceil(articleNum / 5);
      res.render('index', {
        title: 'Index',
        articles: articles,
        user: req.session.user,
        pageNum: pageNum,
        page: page
      });
    })
  })
});

//display blogs according to page num
router.all('/?page=')

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
router.get('/article/:articleID', function (req, res, next) {
  var sql = {
    sql: 'select * from `article` where articleID = ?',
    values: [req.params.articleID]
  }
  db.DBConnection.query(sql, function (err, rows, fields) {
    if (err) {
      console.error(err);
      return;
    }
    res.render('article', { article: rows[0], user: req.session.user });
  })
})
module.exports = router;