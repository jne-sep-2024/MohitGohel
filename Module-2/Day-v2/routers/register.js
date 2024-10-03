const express=require('express');

const router=express.Router();

router.get('/Register',(req,res,next)=>{
    res.send(`<form action='/passvalidate' method="POST">
        <label>Enter username:</label>
        <input name="username" type="text"/><br>
        <label>Enter password</label>
        <input name="password" type="text"/><br>
        <label>Enter password</label>
        <input name="againpassword" type="text"/><br>
        <button>Submit</button>
        </form>`);
});

module.exports=router;