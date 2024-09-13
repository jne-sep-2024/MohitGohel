// let promise = new Promise((resolv,rejec)=>{

//     rejec("I am rejected");
//     // resolv(123);
//     console.log(" I am here");
// })

// console.log(promise);
// console.log(promise);

// let mypromise=(myresolve,myreject)=>{


    
//     myresolve("I am in resolve");
//     myreject("I am in reject");
//     console.log("I am here");
// }
// let myresolve=(n,myreject)=>{
//     setTimeout(()=>{console.log(n)
//         if(!myreject){
//             try{
//                 throw Error("");
//             }catch(error){
                
//             }
        
//         }
//     },0);
// }
// let myreject=(n,myresolve)=>{
//     setTimeout(()=>{console.log(n)
//         if(!myresolve){
//             throw new Error("Rejected");
//         }
//     },0);
// }
// mypromise(myresolve,myreject);


// let promise=new Promise((resolve,reject)=>{
//     reject("Rejected");
//     // resolve("successfully resolved");
// })
// console.log(promise);
// console.log(promise);


// function getData(data,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve("successfull");
//             if(delay){
//                 delay();
//             }
//             console.log(data,promise);
//         },1000);        
//     });
// }
// // let promise=getData(1,()=>{
// //     getData(2);
// // });
// let promise=getData(2);
// console.log(promise);
// console.log(promise);


// let promise=new Promise((resolve,reject)=>{
//     // resolve("successfull");
    
//     reject("rejected");
//     // console.log("I am here");
// })
// promise.then((res)=>{
//     // console.log(res);
//     console.log(res);
// });

// promise.catch((error)=>{
//     console.log("Something went wrong");
// })


function getPromise(){
    return new Promise((resolve,reject)=>{
        reject("Rejected");
        resolve("Fulfilled");
    });
}
// getPromise().then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// });

// getPromise().catch((error)=>{
//     console.log(error);
// })

// getPromise().then((res)=>{
//     console.log(res);
// })

// getPromise().then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })


// function b(data,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             if(delay){
//                 // console.log("I am here");
//                 resolve(data+" resolve");
//                 delay().then((res)=>{
//                     console.log("inner");
//                     console.log(res);
//                 }).catch((error)=>{
//                     console.log(error);
//                 });
//             }else{
//                 reject("Rejected");
//             }
//         },1000);
//     })
// }
// let promise=b(45,(()=>{
//     return b(78,()=>{
//         return b(67);
//     });
// })).then((res)=>{
//     console.log("outter");
//     console.log(res);
// });

function f1(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("Fetched Successfully");
        },1000);
    })
}
function f2(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("Fetched successfully");
        },1000);
    })
}
// let promise=f1(89);
// promise.then((res)=>{
//     console.log(`then ${res}`);
// })

// function f(promise,fun){
//     setTimeout(() => {
//         promise.then((res)=>{
//             console.log(res);
//         })
//         if(fun){
//             fun().then((res)=>{
//                 console.log(res);
//             })
//         }
//     }, 1000);
// }
// let s=f(f1(43),()=>{
//     return f1(45);
// })

// console.log("fetching data1.......");
// f1(34).then((res)=>{
//     console.log(res);
//     console.log("Fetching data2....");
//     f1(56).then(()=>{
//         console.log(res);
//         console.log("Fetching data3......");
//         f1(567).then((res)=>{
//             console.log(res);
//         })
//     });
// });

console.log("Fetching data 1.........");
let i=1;
f1(i).then((res)=>{
    i++;
    console.log(res);
    return f2(i);
}).then((res)=>{
    i++;
    console.log(res);
    return f1(i);
}).then((res)=>{
    console.log(res);
})