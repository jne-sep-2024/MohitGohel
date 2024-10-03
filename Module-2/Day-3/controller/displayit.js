function displayNow(req,res,next){
    const userArray=require('../routers1/displayusre').userArray; 
    console.log(userArray);
    res.render('table',{userArray});  
}
module.exports=displayNow;