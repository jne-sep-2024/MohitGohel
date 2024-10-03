const express=require('express')();
const path=require('path');
const bodyParser=require('body-parser');
express.use(bodyParser.urlencoded({extended:false}));
const indexPage=require('./routers/index.js');
const registerPage=require('./routers/register.js');
const loginPage=require('./routers/login.js');
express.use('/admin',indexPage);
express.use('/admin',registerPage);
express.use('/admin',loginPage.router);
express.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'));
});
express.listen(3000);
