const addbookrouter=require('express').Router();
const displayrouter=require('express').Router();
const additrouter=require('express').Router();
const deleterouter=require('express').Router();
const deleteSpecific=require('express').Router();
const editrouter=require('express').Router();
const editNowrouter=require('express').Router();
addbookrouter.post('/addbook',(req,res,next)=>{
    res.sendFile(require('path').join(__dirname,'../','view','addbook.html'));
});

displayrouter.get('/display',(req,res,next)=>{
    const Book=require('../Model/book.js');
    const map=Book.fetchAll();
    const userArray=require('../controller/validate.js').username;
    const book=map.get(userArray[userArray.length-1].username);
    if(book!==undefined){
        let result=`<table>
                    <thead>
                    <tr>
                    <th>Book Name</th>
                    <th>Book Author</th>
                    <th>Book Category</th>
                    </tr>
                    </thead>
                    </tbody>`;
        for(let i=0;i<book.length;i++){
            result+=`<tr>
                    <td>${book[i].bookName}</td>
                    <td>${book[i].bookAuthor}</td>
                    <td>${book[i].bookCategory}</td>
                    </tr>`
        }
        result+=`</tbody></table>`;
        res.send(result);
    }else{
        res.send('<h1>Nothing To Display</h1>');
    }
})

additrouter.post('/addit',(req,res,next)=>{
    console.log(require('../controller/validate.js').username);
    const Book=require('../Model/book.js');
    let b=new Book(req.body.bookname,req.body.bookauthor,req.body.bookcategory);
    b.save();
    res.redirect('display');
})


deleterouter.get('/delete',(req,res,next)=>{
    const Book=require('../Model/book.js');
    const map=Book.fetchAll();
    const userArray=require('../controller/validate.js').username;
    const book=map.get(userArray[userArray.length-1].username);
    let result=``;
    for(let i=0;i<book.length;i++){
        result+=`<form action="/validate/delete/${i}" method="POST"><label>${book[i].bookName}</label><button>Delete</button></form>`;
    }
    res.send(result);
});
deleteSpecific.post('/delete/:bookid',(req,res,next)=>{
    const Book=require('../Model/book.js');
    const map=Book.fetchAll();
    const userArray=require('../controller/validate.js').username;
    let book=map.get(userArray[userArray.length-1].username);
    if(req.params.bookid!=0){
        book.splice(req.params.bookid,1);
    }else{
        book=book.slice(req.params.bookid+1);
    }
    map.set(userArray[userArray.length-1].username,book);
    require('fs').writeFileSync(require('path').join(__dirname,'../','data','book.txt'),JSON.stringify(Array.from(map)),'utf8');
    console.log(req.params.bookid);
    res.redirect('/validate/delete');
});
editrouter.get('/editbook',(req,res,next)=>{
    const Book=require('../Model/book.js');
    const map=Book.fetchAll();
    const userArray=require('../controller/validate.js').username;
    const book=map.get(userArray[userArray.length-1].username);
    let result=``;
    for(let i=0;i<book.length;i++){
        result+=`<form action="/validate/edit/${i}" method="POST">
        <label>${book[i].bookName}<label>
        <input name="bookname" type="text"/><br>
        <label>${book[i].bookAuthor}</label>
        <input name="bookauthor" type="text"><br>
        <label>${book[i].bookCategory}</label>
        <input name="bookcategory" type="text"><br>
        <button>Edit</button></form>`;
    }
    res.send(result);
});
editNowrouter.post('/edit/:editid',(req,res,next)=>{
    const Book=require('../Model/book.js');
    const map=Book.fetchAll();
    const userArray=require('../controller/validate.js').username;
    const book=map.get(userArray[userArray.length-1].username);
    if(req.body.bookname.length!=0){
        book[req.params.editid].bookName=req.body.bookname;
        console.log("first if");
    }
    if((req.body.bookauthor).length!=0){
        book[req.params.editid].bookAuthor=req.body.bookauthor;
    }
    if((req.body.bookcategory).length!=0){
        book[req.params.editid].bookCategory=req.body.bookcategory;
    }
    map.set(userArray[userArray.length-1].username,book);
    require('fs').writeFileSync(require('path').join(__dirname,'../','data','book.txt'),JSON.stringify(Array.from(map)),'utf8');
    res.redirect('/validate/editbook');
})

module.exports.addbookrouter=addbookrouter;
module.exports.additrouter=additrouter;
module.exports.displayrouter=displayrouter;
module.exports.deleterouter=deleterouter;
module.exports.deleteSpecific=deleteSpecific;
module.exports.editrouter=editrouter;
module.exports.editNowrouter=editNowrouter;