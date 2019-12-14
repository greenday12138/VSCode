var express=require('express');
var db=require('../db');
var router=express.Router();

router.get('/:articleID',function(req,res,next){
    var sql={
        sql:'select * from `article` where articleID = ?',
        values:[req.params.articleID]
    }
    db.DBConnection.query(sql,function(err,rows,fields){
        if(err){
            console.error(err);
            return;
        }
        res.render('modify',{title:'Modify',article:rows[0]});
    })
})

router.post('/:articleID',function(req,res,next){
    var sql={
        sql:'update `article` set articleTitle = ?, articleContent = ?'+
            'where articleID= ?',
        values:[req.body.title,req.body.content,req.params.articleID]
    }
    db.DBConnection.query(sql,function(err,rows,fields){
        if(err){
            console.error(err);
            return;
        }
        res.redirect('/index');
    })
})

module.exports=router;