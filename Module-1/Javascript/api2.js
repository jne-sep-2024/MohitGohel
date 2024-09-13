
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
    return fetch('https://jsonplaceholder.typicode.com/users/101');
}
function c(){
    a().then((res)=>{
        if(res.ok){
            return res.json();
        }else{
            reject("Data not loaded");
        }
    }).then((res1)=>{
        let result='';
        res1.forEach((i)=>{
            result+=`id=${i.id}\nusername=${i.username}\n`;
        })
        document.getElementById("display").innerText=result;
    }).catch((res2)=>{
        document.getElementById("display").innerText="Result Not fetched Properly";
    })
}
function b(){
    document.getElementById("display").innerHTML="";
}
document.getElementById("submit").addEventListener('click',c);
document.getElementById("clear").addEventListener('click',b);