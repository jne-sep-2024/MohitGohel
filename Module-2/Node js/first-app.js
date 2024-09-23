// const fs=require('fs');
// fs.writeFileSync('hello.txt',"This is First File Created");
// fs.appendFileSync('hello.txt',"This is second line in this file");

// console.log(78);
// require('fs').writeFileSync('hello2.txt',"78");
// require('fs').writeFileSync('hello2.txt','I am Mohit');
// require('fs').appendFileSync('hello.txt',""+7890);


//////////////////Asynchronous way of reading the data///////////////////////////////
// require('fs').readFile('hello3.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("Error while reading the data");
//     }
//     return;
//     console.log(data);

// })
//////////Asynchronous way of writing into the file//////////////////
// const fs=require('fs');
// fs.writeFile('hello.txt','I have overwritten the previous content','utf8',(err)=>{
//     if(err){
//         console.error("Some error has occurred");
//     }else{
//         console.log("Data Written successfully");
//     }
// })
/////////////////////////Append in Asynchronous way//////////////////
// fs.appendFile('hello.txt',"\nI have now apended",'utf-8',(err)=>{
//     if(err){
//         console.error("something went wrong",err);
//         return;
//     }
//     console.log("Appended Successfully");
// });

// require('fs').readFile('hell.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("something went wrong",err);
//         return;
//     }
//     console.log(data);
// })

// try{
//     require('fs').readFileSync('hell.txt','utf-8');
// }catch(err){
//     console.log("file not found");
// }

// async function appendingFile(){
//     try{
//         await require('fs').promises.appendFile('hello.txt',"appending asynchronously",'utf8');
//         console.log("Appended Successfully");
//     }catch(err){
//         console.log("something has come up look into it");
//     }
// } 
// appendingFile();
//////////////////////////////////Reading using async/await/////////////
// async function readFile(){
//     try{
//         data=await require('fs').promises.readFile('hell.txt','utf8');
//         console.log(data);
//     }catch(err){
//         console.error("Something has come up",err);
//     }
// }
// readFile();

// try{
//     data=require('fs').readFileSync('hello.txt','utf-8');
//     console.log(data);
// }catch(err){
//     console.error("something has come up",err);
// }

// require('fs').readFile('hello.txt','utf8',(err,data)=>{
//     if(err){
//         console.error("file not found");
//         return;
//     }
//     console.log(data);
// });

// const name='Mohit';
// let age=23;
// const hasHobby=true;


// // function printThese(name,age,hasHobby){
// //     return (name + ' is '+age+' years old '+' and has hobbies '+hasHobby);
// // }
// const printThese=(name,age,hasHobby)=>(name + ' is '+age+' years old '+' and has hobbies '+hasHobby);
// console.log(printThese(name,age,hasHobby));

// const add=a=>a+1;
// console.log(add(6,7));

// const person={
//     name:"mohit",
//     age:89,
//     pan_card:'AUZPF',
//     print(){
//         function toString (name,age,pan_card){
//             return (name+" "+age+" "+pan_card);
//         }
//         return toString(this.name,this.age,this.pan_card);
//     }
// };
// console.log(person.print());

// const cooking=67;
// const hobby=['sports',cooking];
// for(let i in hobby){
//     console.log(i);
// }

// const person={
//     age:78,
//     name:"mohit"
// };
// for(let i in person){
//     console.log(person[i]);
// }
// const hobby=['sports','cooking'];
// console.log(hobby.map((value,index,hobby)=>value+" "+index+" "+hobby));

// const a=[56,45,23,12];
// console.log(a);
// a.push(900);
// console.log(a);

// const a=[56,78,90];
// console.log(a);
// const b=a.concat([]);
// console.log(b);
// b.push(890);
// console.log(a);
// console.log(b);
// const b=a.slice();
// console.log(b);

// const b=[a];
// console.log(b);
// a.pop();
// console.log(b);
// const b=[...a];
// console.log(b);
// a.pop();
// console.log(a);
// console.log(b);

// const d={
//     name:"mohit",
//     id:78
// }
// const e={...d};
// Object.assign(e,{salary:78000});
// console.log(d);
// console.log(e);

// const myArray=(...a)=>{
//     for(let i=0;i<a.length;i++){
//         console.log(a[i]);
//     }
// }
// myArray(1,2,3,4,5,6,7);

// const person={
//     name:"mohit",
//     id:45,
//     salary:78000
// }
// console.log(person);
// const a=(b)=>{
//     b.name="loka";
// }
// a({...person});
// console.log(person);
///////////////////////////////Destructuring Objects//////////////////////
// const person={
//     name:"mohit",
//     id:89
// };
// // function a({name,id}){
// //     console.log(name,id);
// // }
// // a(person);
// // console.log(person);

// let {name,id}=person;
// console.log(name,id);

/////////////////Destructuring Arrays//////////////////////////////
// const [a,b,c]=[10,20,30,60,70];
// console.log(a,b,c); 

// const a=[{name:"mohit"},{id:45}];
// // console.log(a);
// // const b=[...a];
// // a[0].name='loka';
// // console.log(b);
// // console.log(a);
// const b=[];
// for(let i of a){
//     b.push({...i});
// }
// console.log(a);
// a[0].name='loka';
// console.log(b);
// console.log(a);

// setTimeout(()=>{
//     console.log("I am in setTimeout");
// },1000);
// console.log("Hey!!");
// console.log("Hello");

// function a(){
//     let a=10;
//     let b=30;
//     this.c=()=>a;
//     this.d=()=>b;
// }
// let f=new a();
// console.log(f.c(),f.d());

const a=[{name:"mohit",id:45},{salary:67000}];
// require('fs').writeFile('hello2.txt',JSON.stringify({name:"mohit",id:45}),'utf-8',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("written successfully");
// });
// require('fs').appendFile('hello2.txt',"\n"+JSON.stringify({salary:67000}),'utf-8',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("written successfully");
// });
// require('fs').readFile('hello2.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(JSON.parse(data));
// })


require('fs').writeFile('hello2.txt',JSON.stringify(a),'utf-8',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Written Successfully");
})
require('fs').readFile('hello2.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(typeof JSON.parse(data));
})