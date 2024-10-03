const router=require('express').Router();

router.post('/login',require('../controller/login.js'));

module.exports=router;