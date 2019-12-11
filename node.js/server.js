const http=require('http');
const server=new http.Server();


server.on('request',function(req,res){
    let data='';
    req.on('data',function(chunk){
        data+=chunk;
    });
    req.on('end',function(){
        let method=req.method;
        let url=req.url;
        let headers=JSON.stringify(req.headers);
        let httpVersion=req.httpVersion;
        res.writeHead(200,{
            'content-type':'text/html'
        });
        res.write(toString(200),{
            'data':'temo'
        });
        let resData='<p>Data: '+data+' </p>'+
            '<p>method: '+method+'</p>'+
            '<p>url:'+url+'</p>'+
            '<p>headers:'+headers+'</p>'+
            '<p>httpVersion:'+httpVersion+'</p>';
        res.end(resData);
    })
})

server.listen(3000,function(){
    console.log('listening port 3000');
})