

const express=require('express');

const router=express.Router();
const path=require('path');
const page=require('../controller/pagenot.js');
router.use('/',page);

module.exports=router;