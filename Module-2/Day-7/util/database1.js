const mysql=require('mysql2');

const pool=mysql.createPool({
    user:'root',
    host:'localhost',
    password:'961336@mM',
    database:'nodejs'
});

module.exports=pool.promise();