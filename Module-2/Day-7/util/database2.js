const Sequelize=require('sequelize');
const sequelize=new Sequelize('seqdata','root','961336@mM',{dialect:'mysql',host:"localhost"});


module.exports=sequelize;