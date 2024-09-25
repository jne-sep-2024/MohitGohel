
const express=require('express');
const router=express.Router();

router.get('/',require('../controller/adduser.js'));

module.exports=router;