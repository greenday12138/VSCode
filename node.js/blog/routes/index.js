var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = 'select * from `article`';
  db.DBConnection.query(sql, function (err, rows, fields) {
    var articles = rows;
    res.render('index', { title: 'Express' });
  })
});

module.exports = router;
