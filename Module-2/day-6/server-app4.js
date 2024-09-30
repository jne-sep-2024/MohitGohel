const mongoose=require('mongoose');
const app=require('express')();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/mongoose?retryWrites=true&w=majority&appName=Cluster0')
.then(result=>{
    app.listen(3000);
    console.log("Connection SuccessFull");
}).catch(err=>{
    console.log("Connection UnsuccessFull");
});
app.get('/registerpage',(req,res,next)=>{
    res.sendFile(require('path').join(__dirname,'view2','register.html'));
});
app.get('/loginpage',(req,res,next)=>{
    res.sendFile(require('path').join(__dirname,'view2','login.html'));
})
app.post('/register',async (req,res,next)=>{
    const User=require('./model2/user');
    const Book=require('./model2/book');
    const book=new Book({
        arr:[]
    });
    await book.save();
    const user=new User({
        username:req.body.username,
        password:req.body.password,
        arr:book._id
    });
    await user.save().then(result=>{
        console.log("User added SuccessFully");
    }).catch(err=>{
        console.log("Some Err occurred during adding data");
        console.log(err);
    });
    res.sendFile(require('path').join(__dirname,'view2','login.html'));
});
app.post('/login',require('./middleware1/validateuser').validate,(req,res,next)=>{
    const currentuser=require('./middleware1/validateuser').getcurrent();
    console.log(currentuser);
    if(currentuser){
        res.sendFile(require('path').join(__dirname,'view2','addbook.html'));
    }else{
        res.sendFile(require('path').join(__dirname,'view2','login.html'));
    }
});
app.post('/addbook',async (req,res,next)=>{
    const Book=require('./model2/book');
    const User=require('./model2/user');
    const current=require('./middleware1/validateuser').getcurrent();
    const book=await Book.findById(current.arr);
    const arr=book.arr;
    console.log(book);
    console.log(arr);
    arr.push({bookname:req.body.bookname,bookauthor:req.body.bookauthor});
    book.arr=[...arr];
    console.log(book._id);
    console.log(book.arr);
    await book.save().then(result=>{
        console.log("result",result);
        console.log("Book Saved SuccessFully");
    }).catch(err=>{
        console.log("Some error while adding book");
    });
    console.log("updated book",await Book.findById(current.arr));
    console.log("book=",book);
    next();
},async (req,res,next)=>{
    const user=require('./middleware1/validateuser').getcurrent();
    const Book=require('./model2/book');
    const book=await Book.findById(user.arr);
    console.log(book);

    res.send(book+`<form action="/edit" method="POST"><button>Edit</button></form>`);
});

app.post('/edit',async (req,res,next)=>{
    const book=require('./model2/book');
    const current=require('./middleware1/validateuser').getcurrent();
    const b=await book.findById(current.arr);
    console.log(b);
    let result=``;
    for(let i=0;i<b.arr.length;i++){
        result+=`<form action="/edit/${i}" method="POST">
                <label>${b.arr[i].bookname}</label>
                <input name="bookname" type="text"/><br>
                <label>${b.arr[i].bookauthor}</label>
                <input name="bookauthor" type="text"/><br>
                <button>Edit</button>
                </form>`;
    }
    res.send(result);
});
app.post('/edit/:book_id',async (req,res,next)=>{
    const current=require('./middleware1/validateuser').getcurrent();
    const Book=require('./model2/book');
    const book=await Book.findById(current.arr);
    let bookname=book.arr[req.params.book_id].bookname;
    let bookauthor=book.arr[req.params.book_id].bookauthor;
    if(req.body.bookname.length!=0){
        bookname=req.body.bookname;
    }
    if(req.body.bookauthor.length!=0){
        bookauthor=req.body.bookauthor;
    }
    book.arr[req.params.book_id].bookname=bookname;
    book.arr[req.params.book_id].bookauthor=bookauthor;
    await book.save();
    next();
},async (req,res,next)=>{
    const book=require('./model2/book');
    const current=require('./middleware1/validateuser').getcurrent();
    const b=await book.findById(current.arr);
    console.log(b);
    let result=``;
    for(let i=0;i<b.arr.length;i++){
        result+=`<form action="/edit/${i}" method="POST">
                <label>${b.arr[i].bookname}</label>
                <input name="bookname" type="text"/><br>
                <label>${b.arr[i].bookauthor}</label>
                <input name="bookauthor" type="text"/><br>
                <button>Edit</button>
                </form>`;
    }
    res.send(result);
});
app.use('/',(req,res,next)=>{
    res.send(`<h1>Welcome to my CRUD operation APP with Mongoose</h1>
            <form action="/registerpage" method="GET"><button>Register</button></form>
            <form action="/loginpage" method="GET"><button>Login</button></form>`);
});