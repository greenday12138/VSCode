const mysql=require('mysql');

const DB={
    host:'localhost',
    port:'3000',
    user:'root',
    password:'root',
    database:'blog'
};

const DBConnection=mysql.createConnection({
    host:DB.host,
    port:DB.port,
    user:DB.user,
    password:DB.password,
    database:DB.database,
    multipleStatements:true
});
DBConnection.connect();

module.exports=DBConnection;