const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodejs',
    password: '961336@mM'
});

module.exports=pool.promise();