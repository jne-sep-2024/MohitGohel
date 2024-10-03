const express=require('express');
const path=require('path');
const router=express.Router();
const pathname=require('../util/path.js');
console.log(pathname);
const loginPage=require('../routers/login.js');
router.get('/',(req,res,next)=>{
    console.log(loginPage.userArray);
    res.sendFile(path.join(pathname,'views','index.html'));
});

module.exports=router;