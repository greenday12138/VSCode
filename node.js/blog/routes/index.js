var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = 'select * from `article`';
  db.DBConnection.query(sql, function (err, rows, fields) {
    var articles = rows;
    console.log('success');
    res.render('index', { title: 'Express',articles:articles});
  })
});

module.exports = router;