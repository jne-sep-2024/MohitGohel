// const a=[34,45,67,78,90,100];

////////////////////////Reverse Array Without using third variable/////////////////
// console.log(a);
// for(let i=0;i<a.length/2;i++){
//     a.splice(i,0,a[a.length-1-i]);
//     a.splice(a.length-1-i,1);
//     a.splice(a.length-1-i+1,0,a[i+1]);
//     a.splice(i+1,1);
// }
// console.log(a);
////////////////////////////////////////////////////////////////////////////////
// console.log(a);
// console.log(a.filter((res,index,arr)=>{
//     if(arr.indexOf(res)%2==0){
//         return false;
//     }else{
//         return true;
//     }
// }))
// console.log(a);

// document.getElementById("click").addEventListener('click',()=>{
//     let promise=fetch('https://jsonplaceholder.typicode.com/users');
//     promise.then((res)=>{
//         if(res.ok){
//             let promise1=res.json();
//             promise1.then((res1)=>{
//                 let result=`<table>
//                 <thead>
//                 <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>User Name</th>
//                 </tr>
//                 </thead>
//                 <tbody>\n`;
//                 res1.forEach((i)=>{
//                     result+=`<tr>
//                     <td>${i.id}</td>\n
//                     <td>${i.name}</td>\n
//                     <td>${i.username}</td>\n
//                     </tr>`
//                 })
//                 result+=`</tbody>\n</table>`;
//                 document.getElementById("display").innerHTML=result;
//             });
//         }else{
//             document.getElementById("display").innerText="Error Fetching Data";
//         }
//     })
// })

// let b=document.getElementById("mohit").textContent;
// console.log(b);

// document.getElementById("change").addEventListener('click',()=>{
//     let result=`<label>Enter waht you want you there</label>
//     <input id='newtext'/><br><button id='textchange'>change it</button>`
//     document.getElementById("textbox").innerHTML=result;
//     document.getElementById("textchange").addEventListener('click',()=>{
//         let a=document.getElementById("newtext").value;
//         // console.log(a);
//         document.getElementById("textbox").innerText="";
//         document.getElementById("mohit").textContent=a;
    
//     })
// });

document.getElementById("some").addEventListener('dblclick',()=>{
    let a=document.getElementsByClassName("mohit");
    let b=a["div1"].children;
    b["loka"].textContent="bhinika Gohel";
    // console.log(a[0]);
    // for(let i=0;i<a.length;i++){
    //     a[i].innerHTML="Mohit Dinesh Gohel";
    // }
    // a.forEach((res)=>{
    //     res.innerHtml="mohit Dinesh Gohel";
    // })

    // for(let i=0;i<a.length;i++){
    //     a[i].innerText="Mohit Dinesh Gohel "+i;
    // }
    // console.log(a[0].textContent);
    // a[0].textContent="Mohit";
    // a[0].innerHTML="Mohit Dinesh Gohel";
});
