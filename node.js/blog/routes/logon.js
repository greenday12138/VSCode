var express=require('express');
var crypto=require('crypto');
var db=require('../db')
var router=express.Router();

router.get('/',function(err,res,next){
    res.render('logon',{title:'logon'});
})

router.post('/',function(req,res,next){
    var name=req.body.name;
    var password=req.body.password;
    var hash=crypto.createHash('md5');
    password=hash.update(password+'crypt_key').digest('hex');

    var quer={
        sql:'insert into `author` (authorName,authorPassword) values (?,?)',
        values:[name,password]
    }

    db.DBConnection.query(quer,function(err,rows,fields){
        if(err){
            console.error(err);
            return;
        }else{
            console.log("INSERT SUCCESS");
        }
    })
})

module.exports=router;