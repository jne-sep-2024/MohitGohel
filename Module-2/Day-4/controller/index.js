const path=require('path');
function index(req,res,next){
    res.sendFile(path.join(__dirname,'../','view','index.html'));
}

module.exports=index;