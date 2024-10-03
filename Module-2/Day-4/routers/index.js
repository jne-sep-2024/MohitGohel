const express=require('express');
const router=express.Router();
const indexPage=require('../controller/index.js');
router.use(indexPage);

module.exports=router;