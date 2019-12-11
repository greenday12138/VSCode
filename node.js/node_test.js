function geo2weather(lat, lon) {
    return new Promise((resolve, reject) => {
        var params = {
            lat: lat,
            lon: lon,
            //public key 是从openweathermap申请的开发人员的唯一key
            APPID: 'public key'
        }
        var url = 'http://api.openweathermap.org/data/2.5/weather?' + qs.stringify(params);
        request({
            url: url,
            json: true
        }, function (err, resp, body) {
            if (err != null) {
                reject(err);
            } else {
                console.log(body);
                resolve(body);
            }
        });
    })
}

// getJSON('/post/1.json').then(function (post) {
//     return getJSON(post.commentURL);
// }).then(function funcA(comments) {
//     console.log('Resolved: ', comments);
// }, function funcB(comments) {
//     console.log('Rejected: ' + comments);
// })

//调用链中的参数传递 simplified definition
// let task1=(value1)=>{return value1+1};
// let task2=(value2)=>{return value2+2};
// let task3=(value3)=>{console.log(value3+3)};
// Promise.resolve(1)
//     .then(task1)
//     .then(task2)
//     .then(task3)

//调用链中的参数传递 usually definition
// function task1(value1){
//     return new Promise((resolve,reject)=>{
//         if(resolve){
//            return resolve(value1+1);
//         }else{
//             throw new Error('task1 error');
//         }
//     })
// }
// function task2(value2){
//     return new Promise((resolve,reject)=>{
//         if(resolve){
//            return resolve(value2+2);
//         }else{
//             throw new Error('task2 error');
//         }
//     })
// }
// function task3(value3){
//     return new Promise((resolve,reject)=>{
//         if(resolve){
//             console.log(value3+3);
//             return;
//         }else{
//             throw new Error('task3 error');
//         }
//     })
// }
// task1(1).then(task2).then(task3);

//use Promise.resolve()
// function pro1(cb){
//     setTimeout(()=>{
//         console.log('pro1');
//         cb();
//     },500)
// };
// function pro2(cb){
//     setTimeout(
//         ()=>{console.log('pro2');cb();},600
//     )
// }
// function pro3(cd){
//     setTimeout(
//         ()=>{console.log('pro3');cd();},1000
//     )
// }
// Promise.resolve()
//     .then(new Promise(resolve=>pro1(resolve)))
//     .then(new Promise(resolve=>pro2(resolve)))
//     .then(new Promise((resolve,reject)=>pro3(resolve)))

// function pro1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             () => { console.log('pro1'); resolve(); }, 1000
//         );
//     })
// }
// function pro2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             () => { console.log('pro2'); resolve(); }, 5000
//         )
//     })
// }
// function pro3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(
//             ()=>{console.log('pro3');resolve();},500
//         )
//     })
// }
// pro1().then(pro2).then(pro3);

// function loadImageAsync(url){
//     return new Promise(function(resolve,reject){
//         var image=new Image(100,200);
//         image.onload=function(){
//             resolve(image);
//         }
//         image.onerror=function(){
//             reject(new Error('Could not load image at '+url));
//         }
//         image.src=url;
//     })
// }
// loadImageAsync('../img/clock.png');

// let promise = new Promise(function (resolve, reject){
//     console.log('Promise');
//     resolve();
// })
// promise.then(function(){
//     console.log('Resolved');
// })
// console.log('hello');

// function timeout(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms,'done');
//     })
// }
// timeout(1000).then((value)=>{
//     console.log(value);
// })

// const csv=require('csv');
// var gernerator=csv.generate({
//     seed:1,
//     columns:2,
//     length:3
// });
// var parser=csv.parse();
// var transformer=csv.transform(function(data){
//     return data.map(function(value){
//         return value.toUpperCase();
//     })
// });
// var stringifier=csv.stringify();
// gernerator.on('readable',()=>{
//     while(data=gernerator.read()){
//         parser.write(data);
//     }
// });
// parser.on('readable',()=>{
//     while(data=parser.read()){
//         transformer.write(data);
//     }
// });
// transformer.on('readable',()=>{
//     while(data=transformer.read()){
//         stringifier.write(data);
//     }
// });
// stringifier.on('readable',()=>{
//     while(data=stringifier.read()){
//         process.stdout.write(data);
//     }
// })

// const csv=require('csv');
// const fs=require('fs');
// const path=require('path')

// var url=__dirname.split('\\').slice(0,4);
// console.log(url.join('\\'));
// url=url.join('\\');

// 'use strict'
// const fs=require('fs');
// const asyncHooks=require('async_hooks');
// const hook=asyncHooks.createHook({
//     init(asyncId,type,triggerAsyncId,resource){
//         fs.writeSync(1,`init:asyncId-${asyncId},type=${type},triggerAsyncId-${triggerAsyncId}\n`)
//     },
//     before(asyncId){
//         fs.writeSync(1,`before: asyncId-${asyncId}\n`)
//     },
//     after(asyncId){
//         fs.writeSync(1,`after: asyncId-${asyncId}\n`);
//     },
//     destroy(asyncId){
//         fs.writeSync(1,`destroy: asyncId-${asyncId}\n`);
//     }
// }).enable();
// console.log('hello');
// console.log('async_hooks');

// const fs = require('fs');
// const path = require('path')
// fs.open('text.txt','r+',function(err,fd){
//     if(err){
//         return console.error(err);
//     }

//     let buf=Buffer.from('data to append');
//     fs.appendFile('text.txt',buf,(err)=>{
//         if(err) throw err;
//         console.log('Append success');
//     })

    // let str=new String('data to append');
    // fs.writeFile('text.txt',str,'utf8',(err)=>{
    //     if(err) return console.error(err);
    // });

    // let readBuffer=Buffer.alloc(8);
    // let offset=0;
    // let filePosition=0;
    // fs.read(fd,readBuffer,offset,readBuffer.length,filePosition,function(err,readByte){
    //     console.log(`Read data total ${readByte} bytes`);
    //     console.log(readBuffer.slice(0,readByte));
    // })

    // fs.readFile(fd,function(err,data){
    //     console.log(data);
    // })
// })

// console.log(path.normalize(__dirname));
// console.log(path.normalize(path.relative(__dirname,'D:\\Git\\VSCode\\img\\clock.png')));

// console.log(path.normalize(__filename));
// console.log(__filename);

// fs.unlink('package-lock copy.json',(err)=>{
//     if(err)
//         throw err;
//     console.log('successfully deleted file');
// })
// fs.rename('package-lock copy.json', 'temp.json', (err) => {
//     if (err) throw err;
//     fs.stat('temp.json', (err, stat) => {
//         if (err) throw err;
//         console.log(`stats:${JSON.stringify(stat)}`);
//     })
// })


// const dns=require('dns');
// let domain='baidu.com';
// dns.lookup(domain,function(err,address){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(address);
// })

// const path=require('path');
// let outputPath=path.join(__dirname,'node','node.js');
// console.log(outputPath);
// console.log(__dirname);
// console.log(__filename);

// const util=require('util');
// let obj={
//     keyWord:'node.js',
//     name:new Date(),
//     temp:null,
//     sourse:undefined,
//     number:123
// };
// let str=util.inspect(obj,{
//     'colors':true
// });
// console.log(str);

// const queryString=require('querystring');
// let str='keyWord=node.js&name=fffjjf';
// let obj=queryString.parse(str);
// console.log(obj);
// console.log(queryString.stringify(obj));

// const url=require('url');
// let parseUrl='https://www.google.com/?q=node.js';
// let urlObj=url.parse(parseUrl);
// console.log(urlObj);
// console.log(url.format(urlObj));
// console.log(url.resolve('https://www.google.com','/image'));

// const {URL}=require('url');
// const myWHATWGURL=new URL("https://www.baidu.com/?q=node.js");
// console.log(myWHATWGURL);

// function funName(){
//     var argument=[].slice.call(arguments);
//     var sum=0;
//     for(var i=0,max=argument.length;i<max;++i){
//         sum+=argument[i];
//     }
//     return sum;
// }

// console.time('total time');
// console.time('time1');
// for(var i=0;i<10000;++i){
//     ;
// }
// console.timeEnd('time1');
// console.time('time2');
// for(var i=0;i<100000;++i){
//     ;
// }
// console.timeEnd('time2');
// console.timeEnd('total time');

// const util={
//     noRepeat:function(arr){
//         return arr.filter(function(ele,index){
//             return arr.indexOf(ele)===index;
//         })
//     },
//     add:function(arr){
//         return arr.reduce(function(ele1,ele2){
//             return ele1+ele2;
//         })
//     }
// }

// module.exports=util;