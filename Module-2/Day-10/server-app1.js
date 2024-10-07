// const {Book}=require('./model1/book');
const User=require('./module/users');
const Book=require('./module/books');

const app=require('express')();
const mongoose=require('mongoose');

app.post('/',(req,res,next)=>{

    const book=new Book({
        bookName:"mohit",
          bookAuthor:"mohit himself",
          bookCategory:"study"
    });
    book.save().then(result=>{
        const user=new User({
            userName:"mohitgohel",
            password:"1234"
        });
        user.books.push(book._id);
        user.save().then(result=>{
            book.users.push(user._id);
            book.save().then(result=>{
                Book.find().populate('users').then(result=>{
                    console.log(result);
                    res.json({message:result});
                });
                // console.log("User and Book Created SuccessFully");
            });
        });
    });
});

// mongoose.connect('mongodb://localhost:27017/new_db1').then(result=>{

    // app.listen(3000);
    // console.log("Connected SuccessFully");
// });
