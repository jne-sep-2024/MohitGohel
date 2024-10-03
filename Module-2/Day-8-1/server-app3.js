const session=require('express-session');
const mongoose=require('mongoose');
const app=require('express')();
const mongodbstore=require('connect-mongodb-session')(session);
const store=new mongodbstore({
    uri:'mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/mongoose?retryWrites=true&w=majority&appName=Cluster0',
    Collection:'sessions'
});
app.use(session({secret:"my secret",resave:false,saveUninitialized:false,store:store}));


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT,PATCH');
    res.setHeader('Access-Contorl-Allow-Headers','Content-Type,Authorization');
    next();
});

app.get('/',(req,res,next)=>{
    req.session.username="mohit";
    res.status(201).json({where:"here"});
});

app.get('/getsession',(req,res,next)=>{
    console.log(req.session);
});
app.get('/logout',(req,res,next)=>{
    req.session.destroy(()=>{
        res.json({"session":"deleted"});
    })
});

mongoose.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/mongoose?retryWrites=true&w=majority&appName=Cluster0').then(result=>{
    app.listen(3000);
    console.log("Connected SuccessFully");
}).catch(err=>{
    console.log(err);
    console.log("Error While connecting to database");
});