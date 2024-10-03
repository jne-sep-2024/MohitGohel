const app=require('express')();
const session=require('express-session');
const bodyPArser=require('body-parser');
const mongosession=require('connect-mongodb-session')(session);
const mongose=require('mongoose');
const bcrypt=require('bcryptjs');
const Book=require('./model/book');
const User=require('./model/user');
const store=new mongosession({
    uri:'mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/mongoose2?retryWrites=true&w=majority&appName=Cluster0',
    Collection:'session'
});
app.use(bodyPArser.json());
app.use(session({secret:"my secret",resave:false,saveUninitialized:false,store:store}));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});
app.post('/register',async (req,res,next)=>{

    let cur=await User.findOne({username:req.body.username});
    if(cur===null){
        const pass=await bcrypt.hash(req.body.password,12);
        const user=new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            username:req.body.username,
            password:pass,
            arr:[]
        });
        await user.save();
        res.status(201).json({message:"User Added SuccessFully"});
    }else{
        res.json({message:"username already exist"});
    }
});

app.get('/addbook',async(req,res,next)=>{
    console.log(req.query.bookname);
    let result=await Book.findOne({bookname:req.query.bookname});
    console.log(result);
    let user=await User.findOne({username:req.session.username,password:req.session.password});
    console.log(user);
    user.arr.push(result._id);
    await user.save();
    res.json({message:"Book Added SuccessFully"});
});

app.post('/login',async(req,res,next)=>{
    let result =await User.findOne({username:req.body.username,password:req.body.password});
    if(result===null){
        res.json({message:"User Not Found"});
    }else{
        req.session.username=req.body.username;
        req.session.password=req.body.password;
        res.json({message:"User Found"});
    }
});
app.get('/display',async(req,res,next)=>{
    const user=await User.findOne({username:req.session.username,password:req.session.password});
    result=``;
    for(let i=0;i<user.arr.length;i++){
        result+=await Book.findById(user.arr[i]);
    }
    res.json(result);
});
app.patch('/edit/:bookid',async (req,res,next)=>{
    let book=await Book.findById(req.params.bookid);
    if(req.body.bookname){
        book.bookname=req.body.bookname;
    }
    if(req.body.bookauthor){
        book.bookauthor=req.body.bookauthor;
    }
    await book.save();
    res.json({message:"book updated SuccessFully"});
});
app.delete('/delete',async(req,res,next)=>{
    console.log(req.body.bookname);
    let result=await Book.findOne({bookname:req.query.bookname});
    console.log(result);
    if(result!==null){
        let user=await User.findOne({username:req.session.username,password:req.session.password});
        let index=user.arr.indexOf(result._id);
        user.arr.splice(index,1);
        await user.save();
        res.json({message:"Book Deleted SuccessFully"});
    }else{
        res.json({message:"Book not found"});
    }
});
app.get('/logout',(req,res,next)=>{
    req.session.destroy(()=>{
        res.json({message:"Redirect to login page"});
    });
});
// app.get('/storebook',async (req,res,next)=>{
//     const book=[
//         {bookname:"JAVA",bookauthor:"Jamses Gosling"},
//         {bookname:"Mohit",bookauthor:"Mohit Himself"},
//         {bookname:"Him",bookauthor:"Himself"},
//         {bookname:"Me",bookauthor:"MySelf"}
//     ]
//     await Book.insertMany(book);
//     res.json({message:"Book Added SuccessFully"});
// });
mongose.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/mongoose2?retryWrites=true&w=majority&appName=Cluster0')
.then(result=>{
    app.listen(3000);
    console.log("Connection SuccessFull");
}).catch(err=>{
    console.log(err);
});