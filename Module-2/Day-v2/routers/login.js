const express=require('express');
const router=express.Router();



router.get('/Login',(req,res,text)=>{
    res.send(`<form action='/loginValid' method="POST">
        <label>Enter password:</label>
        <input name="username" type="text"/><br>
        <label>Enter password</label>
        <input name="password" type="text"/><br>
        <button>Submit</button>
        </form>
        `);
});
module.exports=router;