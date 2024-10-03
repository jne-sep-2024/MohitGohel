const app=require('express')();
const bodyPArser=require('body-parser');

app.use(bodyPArser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.get('/data',(req,res,next)=>{
    res.status(200).json({
        request:"I am here"
    });
});

app.post('/register',(req,res,next)=>{
    res.status(201).json({request: "I am here",username:req.body.username,password:req.body.password});
});

app.listen(3000);