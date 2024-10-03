let current;
const user=require('../model2/user');
async function  validate(req,res,next){
    await user.find().then(result=>{
        current=undefined;
        for(let i=0;i<result.length;i++){
            if(req.body.username==result[i].username && req.body.password==result[i].password){
                current=result[i];
            }
        }
    }).catch(err=>{

    });
    next();
};

const getcurrent=()=>{
    return current;
}
module.exports.validate=validate;
module.exports.getcurrent=getcurrent;