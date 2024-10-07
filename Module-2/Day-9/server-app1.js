const app=require('express')();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const session=require('express-session');
const User=require('./model/user');
const Book=require('./model/book');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const cookie=require('cookie-parser');
app.use(cookie());
const mongodbconnect=require('connect-mongodb-session')(session);
const store=new mongodbconnect({
    uri:'mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/mongoosemongo?retryWrites=true&w=majority&appName=Cluster0',
    Collection:'sessions'
});
app.use(bodyParser.json());
app.use(session({secret:"my secret",resave:false,saveUninitialized:false,store:store}));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});
app.post('/register',async(req,res,next)=>{
    const pass=await bcrypt.hash(req.body.password,12);
    const user=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        password:pass,
        bookCollection:[]
    }); 
    await user.save().then(result=>{
        res.status(201).json({message:"User Created SuccessFully"});
    }).catch(err=>{
        res.json({message:err});
    });
});


app.post('/login',async(req,res,next)=>{
    console.log(req.body.username);
    let user=await User.findOne({userName:req.body.username});
    if(user!==null){
        console.log(user);
        bcrypt.compare(req.body.password,user.password,(err,isMatch)=>{
            if(isMatch){
                req.session.userid=user._id;
                const secret="2mdnfheyrteownct";

                const uid=jwt.sign({
                    id:user._id,
                    username:user.userName
                },secret);
                res.cookie('uid',uid);
                // res.setHeader('Set-Cookie',`uid=${uid}`);
                res.json({message:user,session:req.session.userid,cookie:uid});
                console.log(req.session.userid);
            }
            else{
                res.json({message:"User Not Found"});
            }
        });
    }else{
        res.json({message:"User Not Found"});
    }
});

app.get('/logout',(req,res,next)=>{

    // jwt.verify(req.get('Cookie'))
    // jwt.verify(req)
    const secret="2mdnfheyrteownct";
    // let result=jwt.verify(req.get('Cookie').split(';')[1].split('=')[1],secret);
    let result=jwt.verify(req.cookies.uid,secret);
    console.log("result=",result);
    console.log(req.cookies.uid);
    console.log(req.get('Cookie').split(';')[1].split('=')[1]);
    res.json({message:req.cookies.uid});

    // req.session.destroy(err=>{
        // console.log(req.get('Cookie'));

        // res.json({message:"I am here"});
    // })
});

app.post('/addbook/:bookid',async(req,res,next)=>{
    let user=await User.findById(req.session.userid);
    let book=await Book.findById(req.params.bookid);
    if(book!==null){
        user.bookCollection.push(book._id);
        user=await user.save();
        res.json({message:user});
    }else{
        res.json({message:"Invalid Id"});
    }
});

// app.post('/book',async (req,res,next)=>{
//     const books = [
//         {
//             bookName: "To Kill a Mockingbird",
//             bookAuthor: "Harper Lee",
//             bookCategory: "Fiction"
//         },
//         {
//             bookName: "1984",
//             bookAuthor: "George Orwell",
//             bookCategory: "Dystopian"
//         },
//         {
//             bookName: "The Great Gatsby",
//             bookAuthor: "F. Scott Fitzgerald",
//             bookCategory: "Classic"
//         },
//         {
//             bookName:"Java",
//             bookAuthor:"Mohit Gohel",
//             bookCategory:"Study"
//         }
//     ];
    
//     await Book.insertMany(books)
//         .then((docs) => {
//             // console.log("Books added successfully:", docs);
//             res.status(201).json({message:docs});
//         })
//         .catch((err) => {
//             console.error("Error adding books:", err);
//         });
// });

mongoose.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/mongoosemongo?retryWrites=true&w=majority&appName=Cluster0')
.then(result=>{
    app.listen(3000);
    console.log("Connected SuccessFully");
}).catch(err=>{
    console.log("Connection Error");
});

