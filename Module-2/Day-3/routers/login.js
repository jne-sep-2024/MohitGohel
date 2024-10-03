
const userArray=[];
const express=require('express');
const router=express.Router();
router.post('/Login',(req,res,next)=>{
    userArray.push(req.body.username);
    res.send(`<h1>Welcome to Login Page</h1><h1>${req.body.username}</h1>`);
});

module.exports.router=router;
module.exports.userArray=userArray;