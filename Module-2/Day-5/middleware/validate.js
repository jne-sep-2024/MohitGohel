function validate(req,res,next){
    console.log("I am here");
    if(req.body.password==req.body.againpassword){
        next();
    }else{
        res.redirect('/register');
    }
}

module.exports=validate;