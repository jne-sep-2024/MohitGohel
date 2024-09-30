const Book=require('../model/book');
function bookadd(req,res,next){
    console.log(req.body.bookname,req.body.bookauthor,req.body.bookcategory,req.body.bookprice);
    const book=new Book(req.body.bookname,req.body.bookauthor,req.body.bookcategory,req.body.bookprice);
    book.save();
    next();
}
module.exports=bookadd;