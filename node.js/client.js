const http = require('http');
let reqData = '';

http.request({
    'host': '127.1.1.1',
    'port': '3000',
    'method': 'post'
}, function (res) {
    res.on('data',function(chunk){
        reqData+=chunk;
    });
    res.on('end',function(){
        console.log(reqData);
    })
}).end();