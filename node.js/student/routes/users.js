var express = require('express');
var db = require('../db.js');
var router = express.Router();

router.get('/', function(req, res, next) {
    var mysqlQuery = 'SELECT * FROM student'
    db.DBConnection.query(mysqlQuery,function(err,rows,fields){
        if(err){
            console.log(err);
            return;
        }
        //express 原生 模板引擎加载页面
        res.render('user', {students:rows})
    });
   
});

module.exports=router;
