const http=require('http');
const fs=require('fs');
const url=require('url');
const path=require('path');
const server=new http.Server();


server.on('request',function(req,res){
    let data='';
    req.on('data',function(chunk){
        data+=chunk;
    });
    req.on('end',function(){
        let method=req.method;
        let headers=JSON.stringify(req.headers);
        let httpVersion=req.httpVersion;

        var filePath='.'+url.parse(req.url).pathname;
        if(filePath==='./'){
            filePath='./client.js';
        }
        fs.exists(filePath,function(exists){
            if(exists){
                var file=fs.readFileSync(filePath);
                res.writeHead(200,{
                    'content-type':'text/plain'
                });
                res.write(file);
                res.end();
            }
        })
        // let resData='<p>Data: '+data+' </p>'+
        //     '<p>method: '+method+'</p>'+
        //     '<p>url:'+url+'</p>'+
        //     '<p>headers:'+headers+'</p>'+
        //     '<p>httpVersion:'+httpVersion+'</p>';

        // res.end(resData);
    })
})

server.listen(3000,function(){
    console.log('listening port 3000');
})