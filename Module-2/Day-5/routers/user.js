
const User=require('../model/user.js');
const router=require('express').Router();
router.use('/',(req,res,next)=>{
    const user=new User('mohitgohel','password');
    user.save();
    User.fetchAll();
});

module.exports=router;