// function getData(data,delay){
//     setTimeout(()=>{
//         console.log(data);
//         if(delay){
//             delay();
//         }
//     },1000);
// }
// let i=1;
// getData(i,()=>getData(++i,()=>getData(++i,()=>getData(++i))));


// let a=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("I am in promise");
//             resolve("Data received successfully");
//         },1000);
//     });
// a.then((res)=>{
//     console.log(res);
// })


// function prom(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve("Data received Successfully");
//         },1000);
//     });
// }
// prom(10).then((res)=>{console.log(res);
//     return prom(20);
// }).then((res)=>{
//     console.log(res);
//     return prom(30);
// }).then((res)=>{
//     console.log(res);
// });

// let a;
// async function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             a=data;
//             resolve("got it");
//         },1000);
//     })
// }
// async function funccall(){
//     await getData(10);
//     await getData(20);
//     await getData(30);
//     console.log(a);
// }
// funccall();


// async function a(i){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             fetch('https://jsonplaceholder.typicode.com/users/'+i).then((res)=>{
//             return res.json();
//         }).then((res)=>{
//             console.log(res);
//         })},1000);
//     })
// } 
// async function b(){
//     await a(1);
//     await a(2);
// }
// b();

// a(1);
// a(2);


// async function func(data){

//         return new Promise((resolv,rejec)=>{
//             setTimeout(()=>{
//                 console.log(data);
//                 resolv("successful");
//             },1000)
//         })
// }

// // async function a(){
// //     let i;
// //     await func(i);
// //     i++;
// //     await func(++i);

// // }

// // a();
// async function a(){
//     await func(1);
//     await func(2);
// }
// a();

// async function a(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             fetch('https://jsonplaceholder.typicode.com/users/'+data).then((res)=>{
//                 if(res.ok){
//                     resolve(res.json());
//                 }else{
//                     reject("rejected");
//                 }
//             })
//         },1000)
//     });
// }
// (async function name() {
//     let i=1;
//     let flag=true;
//     while(true){
//         await a(i).then((res)=>{console.log(res)}).catch((error)=>{
//             flag=false;
//             console.log(error)});
//             if(!flag){
//                 break;
//             }
//         i++;
//     }
// })();
// name();

let a=10;
(function (){
    let a=20;
    function f2(){
        a=90;
        console.log(a);
    }
    return f2;
})()();
// f()();

// f();
console.log(a);