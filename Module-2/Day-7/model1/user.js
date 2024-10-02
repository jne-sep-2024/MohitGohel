const Sequelize=require('sequelize');

const sequelize=require('../util1/database');


const user=sequelize.define('user1',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false        
    }
});
module.exports=user;