
const Book=require('../model/book');
async function deleteit(req,res,next){
    // res.send(req.params.id);
    await Book.deleteBook(req.params.id);
    next();
}

module.exports=deleteit;