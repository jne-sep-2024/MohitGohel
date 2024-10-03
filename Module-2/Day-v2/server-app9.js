const exp=require('express')();
exp.use('/Register',(req,res,next)=>{
    res.send('<h1>Registration Page');
})
exp.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to My Page');
});
exp.listen(3000);