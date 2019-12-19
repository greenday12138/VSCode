var net=require('net');

var server=net.createServer(function(socket){
    console.log('someone connects');

    server.maxConnections=3;
    server.getConnections(function(err,count){
        console.log('the count of client is '+count);
    })

    var message='server sending messages';
    socket.write(message,function(){
        var writeSize=socket.bytesWritten;
        console.log(message+' has send');
        console.log('the size of this message is '+writeSize);
    })

    socket.on('data',function(data){
        console.log(data.toString());
    })
})

// server.listen(18001,function(){
//     console.log('server is listening on port 18001');
// })

server.on('connection',function(){
    console.log('someone connect');
})

server.listen(18001);
server.on('listening',function(){
    console.log('server is listening');
    
    var address=server.address();
    console.log('the port of server is '+address.port);
    console.log('the address of server is '+address.address);
    console.log('the family of server is '+address.family);
})

server.on('close',function(){
    console.log('server closed');
})

server.on('error',function(){
    console.log('error');
})