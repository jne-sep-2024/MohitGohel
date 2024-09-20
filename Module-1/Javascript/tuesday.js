// let a=document.getElementById("loka").children;
// let map=new Map();
// map.set(a[0],"Hey Mohit");
// map.set(a[1],"How Are you");
// map.set(a[2],"I am fine");
// async function chating(b){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             map.forEach((value,key,map1)=>{
//                 console.log(b);
//                 if(b==key){
//                     key.textContent=value;
//                 }else{
//                     key.textContent="";
//                 }
//             })
//             resolve("");
//         },1000);
//     })
// }
// async function doChating(){
//     await chating(a["mohit1"]);
//     await chating(a["mohit2"]);
// }
// doChating();
// async function doChating(){
//     while(true){
//         let a=map.keys();
//     }
// }
// a["mohit1"].textContent="Hello Mohit";
// let b=map.keys();
// // console.log(b.next().done);

// while(!b.next().done){
//     console.log("I am here");
// }

let a=document.getElementById("loka").children;
// console.log(a[0]);
// a["mohit1"].textContent="Hey Mohit";

// a["mohit2"].textContent="I am fine how are you";
// a["mohit3"].textContent="what about you";


let map=new Map();
map.set(a[0],"Hey Mohit");
map.set(a[1],"I am fine how are you");
map.set(a[2],"what about you");


async function chatting(n){
    let k=n;
    return new Promise((resovl,reject)=>{
        setTimeout(() => {
            let j=0;
        map.forEach((value,key,map1)=>{
            if(k==j){
                key.textContent=`${value}`;
            }else{
                key.textContent="-";
            }
            j++;
        })
        resovl("");
        }, 1000);
    });
}

async function doChating(){
    while(true){
        for(let i=0;i<map.size;i++){
            await chatting(i);
        }
    }
}
doChating();

// for(let i=0;i<map.size;i++){
//     setTimeout(()=>{
//         let j=0;
//         let brTag=``;
//         map.forEach((value,key,map1)=>{
//             if(i==j){
//                 key.textContent=`${value}`;
//             }else{
//                 key.textContent="-";
//             }
//             brTag+=`<br>`;
//             j++;
//         })
//     },(i+1)*1000);
// }
document.getElementById("submit").addEventListener('click',(rukja)=>{
    rukja.preventDefault();
    console.log("i am here");
    let username=document.getElementById("username").value;
    console.log(username);
    let password=document.getElementById("password").value;
    console.log(password);
});

document.getElementById("li2").setAttribute('style',"color: blue;");