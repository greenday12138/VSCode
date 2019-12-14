var express=require('express');
var db=require('../db');
var router=express.Router();

//create new blog
router.get('/',function(req,res,next){
    res.render('edit',{title:'Edit'});
})

//edit new blog
router.post('/',function(req,res,next){
    var title=req.body.title;
    var content=req.body.content;
    var author=req.session.user.authorName;
    var sql={
        sql:'insert into `article` (articleTitle,articleAuthor,articleContent,articleTime,articleClick) '+
            'values (?,?,?,CURRENT_DATE(),?)',
        values:[title,author,content,0]
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