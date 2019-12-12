var express = require('express');
var crypto = require('crypto');
var mysql = require('../db.js');
var router = express.Router();

/* login page */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'login' });
});

router.post('/', function (req, res, next) {
  var name = req.body.name;
  var password = req.body.password;
  var hash = crypto.createHash('md5');
  password=hash.update(password+'crypt_key').digest('hex');

  var quer = {
    sql: "select * from `author` where `authorName` = ? and `authorPassword` = ?",
    values: [name, password]
  };
  
  mysql.DBConnection.query(quer, function (err, rows, fields) {
    if (err) {
      console.error(err);
      return;
    }
    var user = rows[0];
    if (user) {
      res.redirect('/index');
    }
  })
})

module.exports = router;
