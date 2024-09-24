require('http').createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url==='/Register'){
        res.write(`
            <html>
            <head><title>Registration Page</title></head>
            <body>
            <form action="/storing" method="POST">
            <label>username:</label>
            <input name="username"/>
            <br>
            <label>password:</label>
            <input name="password"/><br>
            <button>Submit</button>
            </form>
            </body>
            </html>
            `);
        res.end();
    }
    else if(req.url==='/storing' && req.method==='POST'){
        const b=[];
        req.on('data',(chunk)=>{
            b.push(chunk);
        })
        req.on('end',()=>{
            require('fs').writeFileSync('filecreate.txt',Buffer.concat(b).toString(),'utf-8');
        })
        res.statusCode=302;
        res.setHeader('Location','/Login');
        res.end();
    }
    else if(req.url==='/Login'){
        res.write(`
            <html>
            <head><title>Login</title></head>
            <body>
            <form action="/check" method="POST">
            <label>username:</label>
            <input name="username"/>
            <br>
            <label>password:</label>
            <input name="password"/><br>
            <button>Submit</button>
            </body>
            </html>
            `);
        res.end();
    }
    else if(req.url==='/check' && req.method==='POST'){
        const b=[];
        req.on('data',(chunck)=>{
            b.push(chunck);
        });
        req.on('end',()=>{
            let a=Buffer.concat(b).toString();
            a=a.split('&');
            let username=a[0].split('=')[1].split('+');
            let str='';
            for(let i=0;i<username.length;i++){
                str+=username[i]+" ";
            }
            str.trim();
            let password=a[1].split('=')[1];
            let register=require('fs').readFileSync('filecreate.txt','utf8');
            register=register.split('&');
            let username1=register[0].split('=')[1].split('+');
            let str1='';
            for(let i=0;i<username1.length;i++){
                str1+=username1[i]+" ";
            }
            str1.trim();
            let password1=register[1].split('=')[1];
            if(str===str1 && password===password1){
                res.write("SuccessFull Login");
                res.end();
            }else{
                res.write("Un SuccessFul Login");
                res.end();
            }
        })
    }
}).listen(3000);