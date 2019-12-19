const mongoose=require('mongoose');

const uri='mongodb://localhost:27017/article';

mongoose.connect(uri,function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('Connection Success');
})

const ArticleSchema=new mongoose.Schema({
    title:Number,
    author:String,
    content:String,
    publishTime:Date
});
mongoose.model('Article',ArticleSchema);

const Article=mongoose.model('Article');
var art=new Article({
   title:10,
   author:'node',
   content:'Connect to mongodb with node.js',
   publishTime:new Date() 
})

art.save(function(err){
    if(err){
        console.error(err);
        return ;
    }else{
        console.log('save successed');
    }
})