const Book=require('../model/book');
async function editit(req,res,next){
    if(req.body.bookname.length!=0 || req.body.bookauthor.length!=0 || req.body.bookcategory.length!=0 || req.body.bookprice.length!=0){
        await Book.editit(req.body.bookname,req.body.bookauthor,req.body.bookcategory,req.body.bookprice,req.params.id);
        next();
    }
}

module.exports=editit;