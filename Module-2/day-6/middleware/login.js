const user=require('../model/user').user;
const current=require('../model/user').current;
async function login(req,res,next){
    await user.checkuser(req.body.username,req.body.password);
    if(current()){
        next();
    }else{
        res.sendFile(require('path').join(__dirname,'../','view','login.html'));
    }
}

module.exports=login;