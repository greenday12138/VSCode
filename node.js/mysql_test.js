const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'medic'
})

connection.connect(function (err) {
    if (err) {
        console.error('error conneting: ' + err);
        return;
    }
    console.log('conneted as id ' + connection.threadId);
})

// connection.query('select * from data',function(err,rows){
//     if(err){
//         console.error(err);
//     }else{
//         console.log(rows);
//     }
// })
const table = 'data';
// connection.query({
// mysql.escapeId() can be used for data ought to remain unescaped
//     sql: 'select * from '+mysql.escapeId(table),
//     // values: table
// }, function (err, rows) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(rows);
//     }
// })
// mysql.raw() can be used for data ought to remain unescaped
// connection.query('select * from ?', mysql.raw(table), function (err, rows) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(rows);
//     }
// })
connection.query('select ? from data where id = ?', [mysql.raw('name'), 'ee'], function (err, rows) {
    if (err) {
        console.error(err);
    } else {
        console.log(rows);
    }
})
let sql = 'select * from data where id=' + mysql.escape('ee');
connection.query(sql, function (err, rows) {
    if (err) {
        console.error(err);
    } else {
        console.log(rows);
    }
})

connection.end(function (err) {
    console.log(err);
})
//or
// connection.destroy();