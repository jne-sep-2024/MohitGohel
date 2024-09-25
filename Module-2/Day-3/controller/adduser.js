const path=require('path');
function addUser(req,res,next){
    res.sendFile(path.join(require('../util1/path1'),'views1','adduser.html'));
}
module.exports=addUser;