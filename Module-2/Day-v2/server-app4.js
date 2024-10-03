require('http').createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url==='/Register'){
        res.write(`
            <html>
            <head><title>Registration Page</title></head>
            <body>
            <form action='/storing' method='POST'>
            <input name="user"/>
            <button>Submit</button>
            </form>
            </body>
            </html>
            `);
        res.end();
    }
    else if(req.url==='/storing' && req.method==='POST'){
        const b=[];
        req.on('data',(chunck)=>{
            b.push(chunck);
        });
        req.on('end',()=>{
            console.log(Buffer.concat(b).toString());
        });
        res.statusCode=302;
        res.setHeader('Location','/Login');
        res.end();
    }
    else if(req.url==='/Login'){
        res.write("<h1>Login Page</h1>");
        res.end();
    }
}).listen(3000);