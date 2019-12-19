var net=require('net');

var client=new net.Socket({
    //fd:null,
    readable:true,
    writable:true,
    allowHalfOpen:false
});

client.connect(18001,'127.0.0.1',function(){
    console.log('connect the server');

    client.write('message from the client');
})

client.on('data',function(data){
    console.log('the data of server is '+data.toString());
})

client.on('end',function(){
    console.log('data end');
})