const express=require('express')();
const bodyParser=require('body-parser');

express.use(bodyParser.urlencoded({extended:false}));

express.use('/Register',(req,res,next)=>{
    res.send(`<form action='/Login' method="POST">
            <label>Enter username:</label>
            <input name="username"/><br>
            <label>Enter password</label>
            <input name="password"/><br>
            <button>Submit</button>
            </form>`);
})
express.use('/Login',(req,res,next)=>{
    console.log(req.body.username);
    console.log(req.body.password);
})

express.listen(3000);
