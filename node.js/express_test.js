const express=require('express');
const app=express();


app.get('/',(req,res)=>{
//    res.json({
//        'message':'hello world'
//    });
//    res.redirect('https://www.baidu.com');
    res.sendStatus();
})

app.listen(3000,()=>{
    console.log('express listen on port 3000');
})