const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
const mongodbconnect=require('./util/database').mongodbconnect;

app.get('/login',(req,res,next)=>{
    console.log("I am in login page");
    res.sendFile(require('path').join(__dirname,'./','view','login.html'));
});

app.get('/register',(req,res,next)=>{
    console.log("I am in registerpage");
    res.sendFile(require('path').join(__dirname,'./','view','register.html'));
});

app.post('/register',require('./middleware/register'),require('./controller/register'));

app.post('/login',require('./middleware/login'),(req,res,next)=>{
    console.log('I am in login post');
    res.sendFile(require('path').join(__dirname,'./','view','userinteraction.html'));
});

app.post('/login/addbook',(req,res,next)=>{
    res.sendFile(require('path').join(__dirname,'./','view','addbookpage.html'));
});
app.post('/login/addbook/addit',require('./middleware/bookadd'),(req,res,next)=>{
    next();    
},require('./controller/display'));


app.post('/login/display',require('./controller/display'));
app.post('/login/delete',require('./controller/deletepath'));
app.post('/login/delete/:id',require('./controller/deleteit'),require('./controller/deletepath'));
app.post('/login/edit',require('./controller/editpath'));
app.post('/login/edit/:id',require('./controller/editit'),require('./controller/editpath'));
app.use('/',(req,res,next)=>{
    console.log("I am in '/'");
    let result=`<h1>Welcome to my Book Management Project</h1>
                <form action="/register" method="GET"><button>Register</button></form>
                <form action="/login" method="GET"><button>Login</button></form>`;
    res.send(result);
});


mongodbconnect(()=>{
    app.listen(3000);
});