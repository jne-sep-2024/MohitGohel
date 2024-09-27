const express=require('express');

const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const mongoconnect=require('./util1/database1.js').mongodbconnect;
const User=require('./model1/register.js');




app.post('/register',require('./middleware/validate.js'),(req,res,next)=>{
    const user=new User(req.body.firstname,req.body.lastname,req.body.username,req.body.password);
    user.save();
    User.fetchAll();
    res.send("<h1>User Added SuccessFully");
})

app.post('/seedata',async (req,res,next)=>{
    console.log("I am here");
    const user=await User.fetchAll();
    console.log(user);
    let result=`<form action="/options" method="POST"><select name="selectone">`;
    for(let i=0;i<user.length;i++){
        result+=`<option>${user[i]._id}</option>`;
    }
    result+=`</select><button>Submit</button></form>`;
    res.send(result);
});

app.post('/options',async (req,res,next)=>{
    const user=await User.fetchSpecific(req.body.selectone);
    res.send(user);
});


app.post('/delete',async (req,res,next)=>{
    const user=await User.fetchAll();
    let result=``;
    for(let i=0;i<user.length;i++){
        result+=`<form action='/delete/${user[i]._id}' method="POST"><label>${user[i].username}</label><button>Delete</button></form>`;
    }
    res.send(result);
});

app.post('/delete/:id',(req,res,next)=>{
    console.log(req.params.id);
})
app.use((req,res,next)=>{

    res.sendFile(require('path').join(__dirname,'./','view','register.html'));
});

mongoconnect(()=>{
    app.listen(3000);
});