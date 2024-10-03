const app=require('express')();
app.use((req,res,next)=>{
    console.log("I am in middleware");
    next();
});
app.use((req,res,next)=>{
    res.send('<h1>First Page using Express js</h1>');
});

app.listen(3000);