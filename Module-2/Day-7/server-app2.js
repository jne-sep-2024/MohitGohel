const app=require('express')();


const sequelize=require('./util/database2');
const user=require('./model/user');
sequelize.sync().then(result=>{
    console.log(result);
    user.create({
        username:"mohitgohel",
        password:"1234"
    }).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    });

}).catch(err=>{
    console.log(err);
});