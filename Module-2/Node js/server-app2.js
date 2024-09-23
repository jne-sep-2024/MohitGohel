const http=require('http');
http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write(`
        <html>
        <head>
        <title>My First Page</title>
        </head>
        <body>
        <h1> This is My First Page Created using server</h1>
        </body>
        </html>
        `);
    res.end();
}).listen(3000);
