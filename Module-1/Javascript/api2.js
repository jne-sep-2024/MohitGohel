
// function a(){
//     fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
//         if(res.ok){
//             return res.json();
//         }
//     }).then(res1=>{
//         let result='';
//         res1.forEach((i)=>{
//             result+=`id=${i.id}\nusername=${i.username}\n`;
//         })
//         document.getElementById("display").innerText=result;
//     })
// }

function a(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function c(){
    let b=a();
    b.then((res)=>{
        if(res.ok){
            let promise=res.json();
            promise.then((res1)=>{
                res1.map((i)=>{
                    i.id++;
                    return i;
                })
                let result=``;
                res1.forEach((j)=>{
                    result+=`id=${j.id}\nname=${j.username}\n${j.email}\n\n`;
                })
                document.getElementById("display").innerText=result;
            })
        }
        else{
            // console.log("Not received");
            document.getElementById("display").innerText="Data Not Fetched Properly";
        }
    })
}
function b1(){
    document.getElementById("display").innerHTML="";
}
document.getElementById("submit").addEventListener('click',c);
document.getElementById("clear").addEventListener('click',b1);



    // .then((res)=>{
    //     if(res.ok){
    //         return res.json();
    //         // resolve(res.json());
    //     }
    //     else{
    //         // reject("Data not loaded");
    //         console.log("I am here");
    //         return undefined;
    //     }
    // })
    // console.log(b);
    // if(b){
    //     b.then((res1)=>{
    //     let result='';
    //     res1.forEach((i)=>{
    //         result+=`id=${i.id}\nusername=${i.username}\n`;
    //     })
    //     document.getElementById("display").innerText=result;
    //     })
    // }else{
    //     document.getElementById("display").innerText="Result Not fetched Properly";
    // }
    // .then((res1)=>{
    //     let result='';
    //     res1.forEach((i)=>{
    //         result+=`id=${i.id}\nusername=${i.username}\n`;
    //     })
    //     document.getElementById("display").innerText=result;
    // }).catch((res2)=>{
    //     console.log("I am here");
    //     document.getElementById("display").innerText="Result Not fetched Properly";
    // })