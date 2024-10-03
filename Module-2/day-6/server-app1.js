const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
let _db;
const mongodbconnect=callback=>{
    MongoClient.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client=>{
        console.log("connection Successfull");
        _db=client.db('onemore');
        callback();
    }).catch(err=>{
        console.log("Connection UnSuccessFull");
        console.log(err);
    });
};

const getdb=()=>{
    if(_db){
        return _db;
    }else{
        return new Error("Something Went Wrong while sending connection");
    }
}

module.exports.getdb=getdb;
const User=require('./model1/user').User;
app.post('/register',async (req,res,next)=>{
    const user=new User(req.body.username,req.body.password);
    await user.save();
    // res.send('<h1>User Added SuccessFully');
    res.sendFile(require('path').join(__dirname,'view1','login.html'));

});

app.post('/login',async (req,res,next)=>{
    await User.validate(req.body.username,req.body.password);
    if(require('./model1/user').current()){
        res.sendFile(require('path').join(__dirname,'view1','addbook.html'));
    }else{
        res.send("<h1>Login UnSuccessFull</h1>");
    }
});
const Book=require('./model1/book');
app.post('/addbook',async (req,res,next)=>{
    const book=new Book(req.body.bookname,req.body.bookauthor);
    await book.save();
    res.send('<h1>Book Added SuccessFully');
});
app.use('/',(req,res,next)=>{
    res.sendFile(require('path').join(__dirname,'view1','login.html'));
});

mongodbconnect(()=>{
    app.listen(3000);
});
