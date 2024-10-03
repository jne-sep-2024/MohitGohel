const express=require('express');
const router=express.Router();

router.post('/passvalidate',(req,res,next)=>{
    require('fs').readFile('dataWeb.txt','utf8',(err,data)=>{
        if(err){
            let val=require('./validation');
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
                require('./validation').validate(req,res,next);
            }else{
                res.redirect('/Register');
            }
        }
    });
});
router.post('/loginValid',(req,res,next)=>{
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
});

module.exports=router;