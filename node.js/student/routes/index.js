var express = require('express');
var db = require('../db.js');
var router = express.Router();
var path=require('path');

router.get('/', function (req, res, next) {
    //express 原生的渲染页面方式：调用views文件夹下的jade，ejs模板引擎
    // res.render('index');

    //前后端分离架构应该用res.json或res.sendFile
    const html = path.resolve(__dirname, '../public/html/index.html');
    res.sendFile(html);
});

router.post('/', function (req, res, next) {
    var mysqlParams = [req.body.name,
    req.body.chinese,
    req.body.english,
    req.body.math
    ];
    var mysqlQuery = 'INSERT student(name,chinese,english,math) VALUES(?,?,?,?)'
    db.DBConnection.query(mysqlQuery, mysqlParams, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        var success = {
            message: "增加成功"
        };
        res.send(success);
    });
});

module.exports = router;
