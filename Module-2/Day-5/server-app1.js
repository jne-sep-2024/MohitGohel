const express=require('express');
const app=express();

const mongoconnect=require('./util/database.js').mongoconnect;

const router=require('./routers/user.js');
app.use(router);
mongoconnect(()=>{
    app.listen(3000);
});