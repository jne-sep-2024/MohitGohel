const Sequelize=require('sequelize');

const sequelize=require('../util/database3');

const user=sequelize.define('nextuser',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type: Sequelize.STRING,
        allowNull:false
    },
    passord :{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=user;