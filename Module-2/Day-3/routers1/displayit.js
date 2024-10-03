const express=require('express');
const app=express();

const router=express.Router();

router.get('/display',require('../controller/displayit'));

module.exports=router;