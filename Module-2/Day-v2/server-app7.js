function myFunction(req,res){
    res.setHeader('Content-Type','text/html');
    if(req.url==='/Register'){
        res.write(`
            <html>
            <head><title>Register</title></head>
            <body>
            <form action="/saveData" method="POST">
            <label>username</label>
            <input type="text" name="username">
            <br>
            <label>Enter password</label>
            <input type="text" name="password"/><br>
            <label>Enter password Again</label>
            <input type="text" name="againpassword"/><br> 
            <button>Submit</button> 
            </form>          
            </body>
            </html>
            `);
        res.end();
    }
    else if(req.url==='/saveData' && req.method==='POST'){
        const b=[];
        req.on('data',(chunk)=>{
            b.push(chunk);
        });
        req.on('end',()=>{
            const arr=Buffer.concat(b).toString().split('&');
            if(arr[1].split('=')[1] === arr[2].split('=')[1]){
                // try{
                //     const webData=JSON.parse(require('fs').readFileSync('webData.txt','utf-8'));
                //     let i;
                //     for(i=0;i<webData.length;i++){
                //         if(webData[i].username===arr[0].split('=')[1]){
                //             break;
                //         }
                //     }
                //     if(i==webData.length){
                //         webData.push({username:arr[0].split('=')[1],password:arr[1].split('=')[1]});
                //         require('fs').writeFileSync('webData.txt',JSON.stringify(webData));
                //     }else{
                //         res.statusCode=302;
                //         res.setHeader('Location','/Register');
                //         res.end();
                //         return;
                //     }
                // }catch(err){
                //     const webData=[];
                //     webData.push({username:arr[0].split('=')[1],password:arr[1].split('=')[1]});
                //     require('fs').writeFileSync('webData.txt',JSON.stringify(webData));
                // }
                // res.statusCode=302;
                // res.setHeader('Location','/Login');
                // res.end();
                require('fs').readFile('webData.txt','utf8',(err,data)=>{
                    if(err){
                        const webData=[];
                        webData.push({username:arr[0].split('=')[1],password:arr[1].split('=')[1]});
                        // require('fs').writeFileSync('webData.txt',JSON.stringify(webData));
                        require('fs').writeFile('webData.txt',JSON.stringify(webData),(err)=>{

                        });
                    }else{
                        webData=JSON.parse(data);
                        let i;
                        for(i=0;i<webData.length;i++){
                            if(webData[i].username===arr[0].split('=')[1]){
                                break;
                            }
                        }
                        if(i==webData.length){
                            webData.push({username:arr[0].split('=')[1],password:arr[1].split('=')[1]});
                            require('fs').writeFileSync('webData.txt',JSON.stringify(webData),()=>{
                                
                            });
                        }else{
                            res.statusCode=302;
                            res.setHeader('Location','/Register');
                            res.end();
                            return;
                        }
                    }
                    res.statusCode=302;
                    res.setHeader('Location','/Login');
                    res.end();
                });
            }else{
                res.statusCode=302;
                res.setHeader('Location','/Register');
                res.end();
            }
        });
    }
    else if(req.url==='/Login'){
        res.write(`
            <html>
            <head><title>Login</title></head>
            <body>
            <form action="/check" method="POST">
            <label>username</label>
            <input type="text" name="username">
            <br>
            <label>Enter password</label>
            <input type="text" name="password"/><br>
            <button>Submit</button> 
            </form>          
            </body>
            </html>
            `);
            res.end();
    }
    else if(req.url==='/check' && req.method==='POST'){
        res.setHeader('Content-Type','text/html');
        const b=[];
        
        req.on('data',(chunk)=>{
            b.push(chunk);
        });
        req.on('end',()=>{
            const arr=Buffer.concat(b).toString().split('&');
            const webData=JSON.parse(require('fs').readFileSync('webData.txt','utf8'));
            let i;
            for(i=0;i<webData.length;i++){
                if(webData[i].username===arr[0].split('=')[1] && webData[i].password===arr[1].split('=')[1]){
                    res.write(`<h1>username:${arr[0].split('=')[1]}</h1>`);
                    res.write(`<h1>Password:${arr[1].split('=')[1]}</h1>`);
                    res.end();
                    return;
                }
            }
            if(i===webData.length){
                res.statusCode=302;
                res.setHeader('Location','/Login');
                res.end();
            }
        });
    }
    else{
        res.write('Enter Either localhost:3000/Register or localhost:3000/Login');
        res.end();
    }

}
module.exports={
    handler:myFunction,
    someText:"Some thing"
};