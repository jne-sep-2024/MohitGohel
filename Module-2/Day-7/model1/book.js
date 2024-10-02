const Sequelize=require('sequelize');

const sequelize=require('../util1/database');
const book=sequelize.define('book1',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    bookname:{
        type:Sequelize.STRING
    },

    bookauthor:{
        type:Sequelize.STRING
    },
    bookcategory:{
        type:Sequelize.STRING
    }
});
module.exports=book;