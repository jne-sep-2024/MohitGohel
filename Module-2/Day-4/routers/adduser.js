const express=require('express');
const router=express.Router();

router.post('/adduser',require('../controller/adduser.js'));

module.exports=router;