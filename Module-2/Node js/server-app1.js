let http=require('http');
let server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
})
server.listen(3000);