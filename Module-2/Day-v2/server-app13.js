function useForValidation(req,res,text){
    if(req.body.password===req.body.againpassword){
        require('fs').readFile('dataWeb.txt','utf8',(err,data)=>{
            if(err){
                const dataWeb=[];
                dataWeb.push(req.body);
                require('fs').writeFile('dataWeb.txt',JSON.stringify(dataWeb),(err)=>{

                });
            }else{
                const dataWeb=JSON.parse(data);
                dataWeb.push(req.body);
                require('fs').writeFile('dataWeb.txt',JSON.stringify(dataWeb),(err)=>{

                });
            }
            res.redirect('/Login');
        });
    }else{
        res.redirect('/Register');
    }
}
module.exports.validate=useForValidation;