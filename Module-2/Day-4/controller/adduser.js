function adduser(req,res,next){
    if(req.body.password==req.body.againpassword){
        try{
            const userArray=JSON.parse(require('fs').readFileSync(require('path').join(__dirname,'../','data','user.txt'),'utf8'));
            let i;
            for(i=0;i<userArray.length;i++){
                if(userArray[i].username==req.body.username){
                    break;
                }
            }
            if(i==userArray.length){
                userArray.push(req.body);
                require('fs').writeFileSync(require('path').join(__dirname,'../','data','user.txt'),JSON.stringify(userArray),'utf8');
                res.sendFile(require('path').join(__dirname,'../','view','login.html'));
            }else{
                // res.send("<h1>Register Page</h1>");
                res.sendFile(require('path').join(__dirname,'../','view','register.html'));
            }
        }catch(err){
            const userArray=[];
            userArray.push(req.body);
            require('fs').writeFileSync(require('path').join(__dirname,'../','data','user.txt'),JSON.stringify(userArray),'utf8');
            res.sendFile(require('path').join(__dirname,'../','view','login.html'));
        }
    }else{
        // res.send("<h1>Register Page</h1>");
        // res.redirect('/register');
        res.sendFile(require('path').join(__dirname,'../','view','register.html'));
    }
}
module.exports=adduser;