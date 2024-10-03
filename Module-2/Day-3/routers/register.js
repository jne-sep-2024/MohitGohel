const express=require('express');
const path=require('path');
const router=express.Router();
const pathname=require('../util/path.js');
router.post('/Register',(req,res,next)=>{
    res.sendFile(path.join(pathname,'views','register.html'));
});


module.exports=router;