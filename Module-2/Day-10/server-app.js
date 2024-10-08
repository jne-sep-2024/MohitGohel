const app=require('express')();

const mongoose=require('mongoose');
const {User}=require('./model/user');
const {Book}=require('./model/book');
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const cookie=require('cookie-parser');
const bcrypt=require('bcryptjs');
app.use(bodyParser.json());
app.use(cookie());

app.post('/register',async (req,res,next)=>{
    const pass=await bcrypt.hash(req.body.password,12);
    const user=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        password:pass
    });
    await user.save();
    res.status(201).json({message:"User Created SuccessFully",userInfo:user});
});

app.post('/login',async(req,res,next)=>{
    const secret="@@@@IURY$%";
    const user=await User.findOne({userName:req.body.userName,password:req.body.password});
    if(user===null){
        const user=await User.findOne({userName:req.body.userName});
        const pass=await bcrypt.compare(req.body.password,user.password);
        if(pass){
            let token=jwt.sign({
                user:user
            },secret);
            res.cookie('uid',token);
            res.status(200).json({message:"login successfull",token:token});
        }else{
            res.status(401).json({message:"username or password is incorrect"});
        }
    }else{
            let token=jwt.sign({
                user:user
            },secret);
            res.cookie('uid',token);
            res.status(200).json({message:"login successfull",token:token});
    }
}); 

app.post('/display-book-collection',async(req,res,next)=>{
    try{
        const user=jwt.verify(req.cookies.uid,"@@@@IURY$%");
        if(user){
            const userOne=await User.findById(user.user._id);
            let result=[];
            for(let i=0;i<userOne.bookCollection.length;i++){
                const book=await Book.findById(userOne.bookCollection[i]);
                result.push(book);
            }
            res.json({bookCollection:result});
        }
    }catch(err){

        res.status(401).json({message:"Incorrect username or password"});
    }
});

app.get('/display',async(req,res,next)=>{
    const bookCollection=await Book.find();
    if(bookCollection.length==0){
        res.status(404).json({message:"No Book Found"});
    }else{
        res.status(200).json({Collection:bookCollection});
    }
});

app.post('/add-book-in-collection/:bookname',async (req,res,next)=>{
    try{
        const user=jwt.verify(req.cookies.uid,"@@@@IURY$%");
        if(user){
            const userOne=await User.findById(user.user._id);
            console.log(userOne);
            const book=await Book.findOne({bookName:req.params.bookname});
            userOne.bookCollection.push(book._id);
            userOne.save();
            res.status(201).json({message:"Book Added SuccessFully"});
        }
    }catch(err){
        console.log(err);
        res.status(401).json({message:"Incorrect username or password"});
    }
});

app.delete('/delete-book-from-collection/:bookname',async (req,res,next)=>{
    try{
        const user=jwt.verify(req.cookies.uid,"@@@@IURY$%");
        if(user){
            const userOne=await User.findById(user.user._id);
            const book=await Book.findOne({bookName:req.params.bookname});
            let found=false;
            for(let i=0;i<userOne.bookCollection.length;i++){
                console.log(userOne.bookCollection[i],"==",book._id);
                if(userOne.bookCollection[i].toString()==book._id.toString()){
                    userOne.bookCollection.splice(i,1);
                    await userOne.save();
                    found=true;
                    break;
                }
            }
            if(!found){
                res.status(404).json({message:"Book Not Found"});
            }else{
                res.status(204).json({message:"Book Deleted SuccessFully"});
            }
        }
    }catch(err){
        console.log(err);
        res.status(401).json({message:"Incorrect username or password"});
    }
});


app.delete('/delete/:id',async(req,res,next)=>{
    try{
        let user=jwt.verify(req.cookies.uid,"@@@@IURY$%");
        const book=await Book.findById(req.params.id);
        if(user){
            if(user.user.userName=="mohitgohel"){
                if(book){
                    const user=await User.find();
                    for(let i=0;i<user.length;i++){
                        const id=user[i].bookCollection.indexOf(book._id);
                        user[i].bookCollection.splice(id,1);
                        await user[i].save();
                    }
                    await Book.findByIdAndDelete(book._id);
                    res.status(204).json({message:"Book Deleted SuccessFully"});
                }else{
                    res.status(404).json({message:"Book Not Found"});
                }
            }else{
                res.status(403).json({ message: "Forbidden: You are not allowed to Delete a book." });
            }
        }
    }catch(err){
        console.log(err);
        res.json({message:"unAuthorized"});
    }
});



app.post('/addbook',async(req,res,next)=>{
    try{
        let user=jwt.verify(req.cookies.uid,"@@@@IURY$%");
        if(user){
            if(user.user.userName=="mohitgohel"){
                const book=new Book({
                    bookName:req.body.bookName,
                    bookAuthor:req.body.bookAuthor,
                    bookCategory:req.body.bookCategory
                });
                await book.save();
                res.status(201).json({message:"Book Added successFully",book:book});
            }else{
                res.status(403).json({ message: "Forbidden: You are not allowed to add a book." });
            }
        }
    }catch(err){
        console.log(err);
        res.json({message:"unAuthorized"});
    }
});

app.patch('/updatebook/:id',async(req,res,next)=>{
    try{
        const user=jwt.verify(req.cookies.uid,"@@@@IURY$%");
        if(user){
            if(user.user.userName=="mohitgohel"){
                const book=await Book.findById(req.params.id);
                if(book){
                    if(req.body.bookName){
                        book.bookName=req.body.bookName;
                    }
                    if(req.body.bookAuthor){
                        book.bookAuthor=req.body.bookAuthor;
                    }
                    if(req.body.bookCategory){
                        book.bookCategory=req.body.bookCategory;
                    }
                    await book.save();
                    res.status(201).json({message:"Book updated successFully",book:book});
                }else{
                    res.status(404).json({message:"Book not Found"});
                }
            }else{
                res.status(403).json({ message: "Forbidden: You are not allowed to Edit a book." });
            }
        }
    }catch(err){
        console.log(err);
        res.status(401).json({message:"Incorrect username or password"});
    }
});

app.get('/display-by-category',async(req,res,next)=>{
    console.log(req.query.category);
    const book=await Book.find({bookCategory:req.query.category});
    res.status(200).json({message:book});
});

////////////////////////pagination///////////////////////////////////////////

app.get('/:id',async(req,res,next)=>{
    const book=await Book.find().skip(req.params.id-1).limit(1);

    res.send(book);
});

app.get('/',async(req,res,next)=>{
    const book=await Book.find();
    let result=``;
    for(i=0;i<book.length;i++){
        result+=`<a href="/${i+1}">${i+1}</a><br>`;
    }

    // res.redirect('/');
    res.send(result);
});

mongoose.connect('mongodb://localhost:27017/new_db').then(result=>{
    app.listen(3000);
    console.log("SuccessFully Connected");
}).catch(err=>{
    console.log("Error While connecting database");
});



