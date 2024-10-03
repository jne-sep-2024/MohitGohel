const path=require('path');
function register(req,res,next){
    res.sendFile(path.join(__dirname,'../','view','register.html'));
}

module.exports=register;