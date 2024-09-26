function login(req,res,next){
    res.sendFile(require('path').join(__dirname,'../','view','login.html'));
}

module.exports=login;