const express=require('express');
const bodyParser=require('body-parser');
const app=express();


app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','pug');
app.set('views','views1');

const adduser=require('./routers1/adduser.js');
const displayuser=require('./routers1/displayusre.js');
const displayitnow=require('./routers1/displayit.js');
const pagenotfound=require('./routers1/pagenot.js');
app.use('/adduser',adduser);
app.use('/adduser',displayuser.router);
app.use('/adduser',displayitnow);
app.use(pagenotfound);
app.listen(3000);
