const http=require('http');
http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url==='/Register'){
        res.write(`
            <html>
            <head><title>Registration Page</title></head>
            <body>
            <form action="/Login" method="POST">
            <label>Enter username:</label>
            <input name="username"/><br>
            <label>Enter password:</label>
            <input  name="password"><br>
            <label>Enter password Again:</label>
            <input  name="againpassword"><br>
            <button>Submit</button>
            </form>
            </body>
            </html>
            `);
    }
    else if(req.url==='/Login'){
        res.write(`
            <html>
            <head><title>Registration Page</title></head>
            <body>
            <form action="/Register" method="POST">
            <label>Enter username:</label>
            <input name="username"/><br>
            <label>Enter password:</label>
            <input  name="password"><br>
            <button>Submit</button>
            </form>
            </body>
            </html>
            `);
    }else{
        res.write('<h1> Enter valid URl</h1>');
    }
    res.end();
}).listen(3000);

