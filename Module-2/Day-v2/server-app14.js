const express=require('express')();

const bodyParser=require('body-parser');
express.use(bodyParser.urlencoded({extended:false}));
const loginrouter=require('./routers/login.js');
const registerrouter=require('./routers/register.js');
const validaterouter=require('./routers/validaion.js');
express.use(registerrouter);
express.use(loginrouter);
express.use(validaterouter);
express.listen(3000);