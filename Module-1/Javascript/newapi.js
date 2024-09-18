// let promise=fetch("https://jsonplaceholder.typicode.com/users");
// promise.then(res=>{
//     if(res.ok){
//         let res1=res.json();
//         res1.then((res1)=>{
//             console.log(res1);
//         })
//     }else{
//         console.log("Data Not Fetched Properly")
//     }
// })

let a=[];
let promise=fetch("https://jsonplaceholder.typicode.com/users");
promise.then((res)=>{
    if(res.ok){
        let promise1=res.json();
        promise1.then((res1)=>{
            let result=``;
            for(let i=0;i<res1.length;i++){
                a.push(res1[i]);
                result+=`<option>${res1[i].name}</option>\n`;
            }
            document.getElementById("selection").innerHTML=result;
        })
    }else{
        console.log("Data Cannot be fetched");
    }
})

document.getElementById("selection").addEventListener('change',()=>{
    let result=``;
    for(let i=0;i<a.length;i++){
        result+=`<option>${a[i].phone}</option>\n`;
    }
    document.getElementById("onselection").innerHTML=result;
})
let b=[];
document.getElementById("submit").addEventListener('click',()=>{

    let promise=fetch("https://jsonplaceholder.typicode.com/users");
    promise.then((res)=>{
    if(res.ok){
        let promise1=res.json();
        promise1.then((res1)=>{
            let result=`<select id='enterid'>`;
            for(let i=0;i<res1.length;i++){
                b.push(res1[i]);
                result+=`<option>${res1[i].id}</option>\n`;
            }
            result+=`</select>`
            document.getElementById("specific").innerHTML=result;
            document.getElementById("enterid").addEventListener('change',()=>{
                let s=document.getElementById("enterid").value;
                for(let i=0;i<b.length;i++){
                    if(s==b[i].id){
                        let result=`<table>
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>username</th>
                                        <th>email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    <td>${b[i].id}</td>
                                    <td>${b[i].name}</td>
                                    <td>${b[i].username}</td>
                                    <td>${b[i].email}</td>
                                    </tr>
                                    </tbody>
                                    </table>`
                        document.getElementById("specific").innerHTML=result;
                    }
                }
            })
        })
    }else{
        console.log("Data Cannot be fetched");
    }
})
})