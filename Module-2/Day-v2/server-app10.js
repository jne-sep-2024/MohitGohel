const express=require('express')();
express.use('/Register',(req,res,next)=>{
    res.send(`<form action='/Login' method="POST">
        <button>Submit</button>
        </form>
        `);
})
express.use('/Login',(req,res,next)=>{
    res.send(`<h1>Login Page</h1>`);
})
express.use('/',(req,res,next)=>{
    res.send('<h1>Use localhost:3000/Login or localhost:3000/Register');
})
express.listen(3000);