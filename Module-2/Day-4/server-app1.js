const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/index',require('./routers/register.js'));
app.use('/index',require('./routers/login.js'));
app.use('/register',require('./routers/adduser.js'));
app.use('/login',require('./routers/validate.js'));
app.use('/validate',require('./routers/userinteraction.js').addbookrouter);
app.use('/validate',require('./routers/userinteraction.js').additrouter);
app.use('/validate',require('./routers/userinteraction.js').displayrouter);
app.use('/validate',require('./routers/userinteraction.js').deleterouter);
app.use('/validate',require('./routers/userinteraction.js').editrouter);
app.use('/validate',require('./routers/userinteraction.js').deleteSpecific);
app.use('/validate',require('./routers/userinteraction.js').editNowrouter);
app.use('/index',require('./routers/index.js'));
app.listen(3000);