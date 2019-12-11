var express = require('express');
var crypto = require('crypto');
var mysql = require('../db');
var router = express.Router();

/* login page */
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'login' });
});

router.post('/login', function (req, res, next) {
  var name = req.body.name;
  var password = req.body.password;
  // var hash = crypto.createHash('md5');
  // hash.update(password);
  // password=hash.digest('hex');

  var query = {
    sql: 'select * from author where authorName= ? and authorPassword= ?',
    values: [name, password]
  };
  mysql.query(query, function (err, rows, fields) {
    if (err) {
      console.error(err);
      return;
    }
    var user = rows(0);
    console.log(rows);
    if (user) {
      res.redirect('../index');
    }
  })
})

module.exports = router;
