
function pagenotFound(req,res,next){
    res.status(404).sendFile(require('path').join(require('../util1/path1'),'views1','404.html'));
}

module.exports=pagenotFound;