// "180.153.132.38",
// "75.125.235.224",
// "91.239.201.98"
// "115.29.230.208"
var fs = require('fs');
var request = require('request');
var qs = require('querystring');

//通过JSON.parse来解析IP列表中的地址
function readIP(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function (err, data) {
            if (err) {
                console.error(err);
                return reject(err);
            } else {
                try {
                    data = JSON.parse(data);
                    return resolve(data);
                } catch (error) {
                    console.error(error);
                    return reject(error);
                }
            }
        });
    })
}

//通过telize的公共GEO服务来获取城市信息
function ip2geo(ip) {
    return new Promise((resolve, reject) => {
        console.log(ip);
        var url = 'http://ip.taobao.com/service/getIpInfo.php?ip=' + ip;
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
        })
    })
}

//通过openweathermap的公共服务来获取当地的天气信息
function geos2weathers(geos) {
    return new Promise((resolve, reject) => {
        var weathers = [];
        for (var i = 0; i < geos.length; i++) {
            var params = {
                lat: geos[i].latitude,
                lon: geos[i].longitude,
                //public key 是从openweathermap申请的开发人员的唯一key
                APPID: '432758d78e59b249b3241adf271eded3'
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
                    let weather;
                    weather.geo = geo;
                    weather.we = body;
                    weathers.push(weather);
                }
            });
        }
        if (weathers.length > 0) {
            resolve(weathers);
        } else {
            console.log('geo to weathers error');
            reject('error');
        }
    })

}

function writeWeather(weathers) {
    return new Promise((resolve, reject) => {
        var output = [];
        var weather;
        //使用for循环遍历每个IP地址的信息
        for (var i = 0; i < weathers.length; i++) {
            weather = weathers[i];
            output.push({
                ip: weather.geo.ip,
                weather: weather.weather[0].main,
                region: weather.geo.region
            });
        }
        //使用fs.writeFile函数将结果写入到weather.json中
        fs.writeFile('./weather.json', JSON.stringify(output, null, '  '), callback);
    })
}

//main执行函数
Promise.resolve('ip.json');
readIP('ip.json')
    .then(ip2geo)
    .then(geos2weathers)
    .then(writeWeather)

//暂未成功