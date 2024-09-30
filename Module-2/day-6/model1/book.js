const getdb=require('../server-app1').getdb;
module.exports=class Book{
    constructor(bookname,bookauthor){
        this.bookname=bookname;
        this.bookauthor=bookauthor;
    }

    async save(){
        const current=require('./user').current();
        const db=getdb();
        const book=await db.collection('books').findOne({_id:current.book_id});
        book.arr.push({bookname:this.bookname,bookauthor:this.bookauthor});
        await db.collection('books').updateOne({_id:current.book_id},{$set:{arr:book.arr}});
    }
}
