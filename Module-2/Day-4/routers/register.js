const express=require('express');
const router=express.Router();
router.post('/register',require('../controller/register.js'));

module.exports=router;