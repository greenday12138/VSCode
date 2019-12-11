const request = require('request');
const url=require('url');
const cheerio=require('cheerio');
const fs=require('fs');
const path = require('path');
const config = require('./config');

function start() {
    request(config.url, function (err, res, body) {
        console.log('start');
        if (!err && res) {
            console.log('start');
            findImg(body,downLoad);
        }
    })
}

function findImg(dom,callback){
    let $=cheerio.load(dom);
    $('img').each(function(i,elem){
        let imgSrc=$(this).attr('src');
        // let imgSrc=url.resolve(config.url,$(this).attr('src'));
        callback(imgSrc,i);
    })
}

function downLoad(imgUrl,i){
    let ext=imgUrl.split('.').pop();
    request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir,i+'.'+ext),{
        'encoding':'utf8'
    }));
    console.log('Get'+i+'pic...');
}

start();