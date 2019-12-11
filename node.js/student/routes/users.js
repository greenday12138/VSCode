var express = require('express');
var db = require('../db.js');
var router = express.Router();

router.get('/user', function(req, res, next) {
    var mysqlQuery = 'SELECT * FROM student'
    db.DBConnection.query(mysqlQuery,function(err,rows,fields){
        if(err){
            console.log(err);
            return;
        }
        res.render('user', {students:rows})
    });
    next();
});

module.exports=router;
