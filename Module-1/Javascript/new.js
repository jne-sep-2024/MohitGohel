// function multi(a,b,c){
//     return a*b*c;
// }
// // let a=(a,b,c)=>{
// //     return a*b*c; 
// // };

// let a=(a,b,c)=>a*b*c;

// console.log(a(2,3,4));


// function multiplay(d){
//     console.log(d(2,3,4));
// }

// multiplay(a);


// let a={
//     b:"mohit"
// };
// // console.log(Object.entries(a));
// Object.assign();

// const d={
//     id:45,
//     name:"mohit"
// }
// Object.freeze(d);
// const e={
//     salary: 56000
// }
// Object.assign(d,e);
// console.log(d);
// Object.seal(d);
// d.id=56;
// console.log(d);
// const e={
//     salary: 56000
// }
// Object.assign(d,e);
// console.log(d);
// console.log(e);
// d.salary=9000;
// console.log(d);
// console.log(e);

// let a=[1,"2",3,"4","5"];
// console.log(a.reduce((res,cur)=>{
//     return res+cur;
// }))

// const Emp={
//     id: 56,
//     name: "mohit",
//     salary: 56000
// };
// const Sales={
//     target :70
// }
// Sales.__proto__=Emp;
// console.log(Sales);
// // Sales.id=90;
// console.log(Sales.id);
// for(let i=0;i<l.length;i++){
//     setTimeout(()=>{
//         document.getElementById("change").textContent=document.getElementById("change").textContent+`${l[i]}`;
//     },(i+1)*500)
// }
// let s=document.getElementById("change").textContent;
// console.log(s);
// for(let i=0;i<l.length;i++){
//         setTimeout(()=>{
//             let result=``;
//             for(let j=0;j<s.length-i-1;j++){
//                 result+=s[j];
//             }
//             document.getElementById("change").textContent=result;
//         },(i+1)*500);
// }

l="Mohit";
m="Gohel";
async function removeName(i,s){
    return new Promise((resovl,reject)=>{
        setTimeout(()=>{
            let result=``;
            for(let j=0;j<s.length-i-1;j++){
                result+=s[j];
            }
            document.getElementById("change").textContent=result;
            resovl("");
        },100);
    })
}
async function displayName(str){
    return new Promise((resovl,reject)=>{
        setTimeout(()=>{
            document.getElementById("change").textContent=document.getElementById("change").textContent+str;
            resovl("");
        },100);
    })
}
async function waitSomeTime(){
    return new Promise((resovl,reject)=>{
        setTimeout(()=>{
            resovl("");
        },2000)
    })
}
async function callFunction(){
    while(true){
        for(let i=0;i<l.length;i++){
            await displayName(l[i]);
        }
        await waitSomeTime();
        let s=document.getElementById("change").textContent;
        for(let i=0;i<l.length;i++){
            await removeName(i,s);
        }
        for(let i=0;i<m.length;i++){
            await displayName(m[i]);
        }
        await waitSomeTime();
        s=document.getElementById("change").textContent;
        for(let i=0;i<m.length;i++){
            await removeName(i,s);
        }
    }

}
callFunction();

let box=document.getElementsByClassName("box");
async function boxdisco(i){
    return new Promise((resovl,reject)=>{
            setTimeout(()=>{
                for(let j=0;j<box.length;j++){
                    if(i==j){
                        box[j].setAttribute('style',"background-color: black; color: wheat;");
                    }
                    else{
                        box[j].setAttribute('style',"");
                    }
                }
                resovl("");
            },500);
    })
}
async function discoBox(){
    while(true){
        for(let i=0;i<box.length;i++){
            await boxdisco(i);
        }
    }
}
discoBox();