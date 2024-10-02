const app=require('express')();
const db=require('./util/database1');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.post('/register',async (req,res,next)=>{
    let result = await db.execute('select * from user where username=?',[req.body.username]);
    if(result[0].length==0){
        await db.execute('insert into user(username,password) values(?,?)',[req.body.username,req.body.password]);
        res.sendFile(require('path').join(__dirname,'view','login.html'));
    }else{
        res.sendFile(require('path').join(__dirname,'view','register.html'));
    }
});

app.post('/login',async (req,res,next)=>{
    let result = await db.execute('select * from user where username=? and password=?',[req.body.username,req.body.password]);
    // console.log(result[0][0].id);
    if(result[0].length==0){
        res.sendFile(require('path').join(__dirname,'view','login.html'));
    }else{
        res.send(`<form action="/addbook/${result[0][0].id}" method="POST">
                <button>Add Book</button>
                </form>
                <form action="/display/${result[0][0].id}" method="POST">
                <button>Display Books</button>
                </form>
                <form action="/Delete/${result[0][0].id}" method="POST">
                <button>Delete Books</button>
                </form>
                `);
    }
});
app.post('/addbook/:userid',async (req,res,next)=>{
    let result=await db.execute('select id,bookname from book where id not in(select bookid from userbook where userid =?)',[req.params.userid]);
    let rel=`<form action="/addbook/addit/${req.params.userid}" method="POST">
    <select name="selectbook">`
    for(let i=0;i<result[0].length;i++){
        rel+=`<option>${result[0][i].id}-${result[0][i].bookname}</option>`;
    }
    rel+=`</select><button>Add</button></form>`;
    res.send(rel);
});
app.post('/addbook/addit/:userid',async (req,res,next)=>{
    console.log(req.body.selectbook);
    let result=req.body.selectbook.split('-');
    console.log(result[0]);
    console.log(req.params.userid);
    await db.execute('insert into userbook (userid,bookid) values(?,?)',[req.params.userid,result[0]]);
    next();
},async (req,res,next)=>{
    let result=await db.execute('select * from book where id in(select bookid from userbook where userid=?)',[req.params.userid]);
    let rel=`<table>
            <thead>
            <tr>
                <th>Book Name</th>
                <th>Book Author</th>
                <th>Book Category</th>
            </tr>
            </thead>
            <tbody>`
    for(let i=0;i<result[0].length;i++){
        rel+=`<tr>
                <td>${result[0][i].bookname}</td>
                <td>${result[0][i].bookauthor}</td>
                <td>${result[0][i].bookcategory}</td>
                </tr>`;
    }
    rel+=`</tbody></table>`;
    res.send(rel);
});
app.post('/display/:userid',async (req,res,next)=>{
    let result=await db.execute('select * from book where id in(select bookid from userbook where userid=?)',[req.params.userid]);
    console.log(result);
    let rel=`<table>
            <thead>
            <tr>
                <th>Book Name</th>
                <th>Book Author</th>
                <th>Book Category</th>
            </tr>
            </thead>
            <tbody>`
    for(let i=0;i<result[0].length;i++){
        rel+=`<tr>
                <td>${result[0][i].bookname}</td>
                <td>${result[0][i].bookauthor}</td>
                <td>${result[0][i].bookcategory}</td>
                </tr>`;
    }
    rel+=`</tbody></table>`;
    res.send(rel);
});
app.post('/Delete/:userid',async(req,res,next)=>{
    let result = await db.execute('select * from book where id in(select bookid from userbook where userid=?)',[req.params.userid]);
    // console.log(result);
    let rel=``;
    for(let i=0;i<result[0].length;i++){
        rel+=`<form action="/deleteit/${req.params.userid}" method="POST">
        <input type="hidden" name="bookid" value=${result[0][i].id}>
        <label>${result[0][i].bookname}</label>
        <label>${result[0][i].bookauthor}</label>
        <label>${result[0][i].bookcategory}</label>
        <button>Delete</button>
        </form>`
    }
    res.send(rel);
});
app.post('/deleteit/:userid',async (req,res,next)=>{
    await db.execute('delete from userbook where userid=? and bookid=?',[req.params.userid,req.body.bookid]);
    next();
},async(req,res,next)=>{
    let result = await db.execute('select * from book where id in(select bookid from userbook where userid=?)',[req.params.userid]);
    // console.log(result);
    let rel=``;
    for(let i=0;i<result[0].length;i++){
        rel+=`<form action="/deleteit/${req.params.userid}" method="POST">
        <input type="hidden" name="bookid" value=${result[0][i].id}>
        <label>${result[0][i].bookname}</label>
        <label>${result[0][i].bookauthor}</label>
        <label>${result[0][i].bookcategory}</label>
        <button>Delete</button>
        </form>`
    }
    res.send(rel);
});
app.get('/register',(req,res,next)=>{
    res.sendFile(require('path').join(__dirname,'view','register.html'));
});

app.get('/login',(req,res,next)=>{
    res.sendFile(require('path').join(__dirname,'view','login.html'));
});

app.use('/',(req,res,)=>{
    res.send(`<form action="/register" method="GET">
            <button>Register</button>
            </form>
            <form action="/login" method="GET">
            <button>Login</button>
            </form>`);
});



app.listen(3000);

