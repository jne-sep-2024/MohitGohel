const User=require('../model/user').user;
function register(req,res,next){
    console.log(req.body.firstname,req.body.lastname,req.body.email,req.body.username,req.body.password);
    const user=new User(req.body.firstname,req.body.lastname,req.body.email,req.body.username,req.body.password);
    user.save();
    res.sendFile(require('path').join(__dirname,'../','view','login.html'));
}

module.exports=register;