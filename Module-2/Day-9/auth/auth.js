const jwt=require('jsonwebtoken');
const secret="tmrnfdte;dfddffdsa:";
exports=settoken=(user)=>{
    return jwt.setToken({
        id:user._id,
        username:user.userName
    },secret);
}

exports=getToken=(token)=>{
    return jwt.getToken(token,secret);
}