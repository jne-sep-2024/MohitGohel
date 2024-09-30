function register(req,res,next){

    console.log(req.body.firstname,req.body.lastname,req.body.email,req.body.username,req.body.password);
    if(req.body.firstname.length!=0,req.body.lastname.length!=0,req.body.email.length!=0,req.body.username.length!=0,req.body.password.length!=0){
        if(req.body.password==req.body.againpassword){
            next();
        }else{
            res.sendFile(require('path').join(__dirname,'../','view','register.html'));
        }
    }else{
        res.sendFile(require('path').join(__dirname,'../','view','register.html'));
    }
}

module.exports=register;