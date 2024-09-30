const Book=require('../model/book');
async function display(req,res,next){
    // res.send("display book page");
    res.send(await Book.getBook());
}

module.exports=display;