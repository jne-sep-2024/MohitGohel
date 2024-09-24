const express=require('express')();
express.use(require('body-parser').urlencoded({extended:false}));

express.use('/Register',(req,res,next)=>{
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

express.use('/passvalidate',(req,res,next)=>{
    require('fs').readFile('dataWeb.txt','utf8',(err,data)=>{
        if(err){
            let val=require('./server-app13');
            val.validate(req,res,next);
        }else{
            const dataWeb=JSON.parse(data);
            let i;
            for(i=0;i<dataWeb.length;i++){
                if(dataWeb[i].username===req.body.username){
                    break;
                }
            }
            if(i==dataWeb.length){
                require('./server-app13').validate(req,res,next);
            }else{
                res.redirect('/Register');
            }
        }
    });
});
express.use('/Login',(req,res,text)=>{
    res.send(`<form action='/loginValid' method="POST">
        <label>Enter password:</label>
        <input name="username" type="text"/><br>
        <label>Enter password</label>
        <input name="password" type="text"/><br>
        <button>Submit</button>
        </form>
        `);
});
express.use('/loginValid',(req,res,next)=>{
    require('fs').readFile('dataWeb.txt','utf8',(err,data)=>{
        if(err){
            res.redirect('/Register');
        }else{
            const dataWeb=JSON.parse(data);
            let i;
            let userFound=1;
            for(i=0;i<dataWeb.length;i++){
                if(dataWeb[i].username===req.body.username){
                    userFound=2;
                    if(dataWeb[i].password===req.body.password){
                        res.send('<h1>SuccessFul Login');
                        return;
                    }
                }
            }
            if(userFound===2){
                res.send('<h1>UserName or password is worng');
            }else{
                res.redirect('/Register');
            }
        }
    })
})
express.listen(3000);