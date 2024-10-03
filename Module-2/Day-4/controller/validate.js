let username=[];
function validate(req,res,next){
    try{
        const userArray=JSON.parse(require('fs').readFileSync(require('path').join(__dirname,'../','data','user.txt'),'utf8'));
        let i;
        for(i=0;i<userArray.length;i++){
            if(req.body.username==userArray[i].username && req.body.password==userArray[i].password){
                username.push({username:req.body.username,password:req.body.password});
                console.log(username);
                break;
            }
        }
        if(i==userArray.length){
            res.sendFile(require('path').join(__dirname,'../','view','register.html'));
        }else{
            res.sendFile(require('path').join(__dirname,'../','view','userinterface.html'))
        }
    }catch(error){
        res.sendFile(require('path').join(__dirname,'../','view','register.html'));
    }
}

exports.validate=validate;
exports.username=username;