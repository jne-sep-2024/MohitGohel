// async function a(j){
//     return new Promise((resolv,reject)=>{
//         function d(){
//             console.log(j);
//             reject("reject");
//         }
//         setTimeout(d,1000);
//     })
// }

// async function b(){
//     await a(1).catch((res)=>{
//         console.log(res);
//     });
//     await a(2).catch((res)=>{
//         console.log(res);
//     });
// }
// b();

// let b=document.getElementById("divnode").children;
// console.log(b);

// let h1=document.getElementById("h1tag").textContent;
// function a(){
//     let moveover=0;
//     document.getElementById("h1tag").addEventListener('mouseover',()=>{
//         document.getElementById("h1tag").textContent="Hey Mohit";
//         moveover++;
//         console.log("moveover=",moveover);
//     })
// }
// function b(){
//     let mouseout=0;
//     document.getElementById("h1tag").addEventListener('mouseout',()=>{
//         document.getElementById("h1tag").textContent=h1;
//         mouseout++;
//         console.log("mouseout=",mouseout);
//     })
// }
// a();
// b();

// console.log("start");
// setTimeout(()=>{
//     console.log("call back");
// },1000);
// console.log("stop");

// async function a(b){
//     return new Promise((resolv,reject)=>{
//         setTimeout(()=>{
//             console.log(b);
//             resolv("");
//         },1000)
//     })
// }
// async function c(n){
//     if(n!=0){
//         await c(n-1);
//         await a(n);
//     }
// }
// c(10);
// setTimeout(()=>{
//     console.log("I am here in setTimeout");
// },10000);
// async function cb(res){
//     return new Promise((resolv,reject)=>{
//         setTimeout(()=>{
//             console.log("I am called");
//             console.log(res);
//             resolv("resovle");
//         },1000);
//     })
// }
// fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     res.json().then((res1)=>{
//             async function cbf(){
//                 for(let i of res1){
//                     await cb(i);
//                 }
//             }
//             cbf();
//         // console.log(res1);
//     }).catch((res2)=>{
//         console.log("I am here");
//         console.log(res2);
//     });
// })
// .catch(()=>{
//     console.log("I am there");
//     console.log("didn't fetched properly");
// })


// const Employee={
//     id:45,
//     name:"mohit gohel",
//     salary:56000,
//     toString(){
//         return `id=${this.id}\nname=${this.name}\nsalary=${this.salary}\n`;
//     }
// };

// const Sales={
//     emp:Employee,
//     target:56,
//     toString(){
//         return super.toString()+`target=${this.target}`;
//     }
// }

// Sales.__proto__=Employee;

// // Sales.getId();

// // console.log(Sales.id);
// console.log(Sales.toString());

// function a(){
//     let id;
//     let name;
//     let salary;

//     this.setId=(id1)=>{
//         id=id1;
//     }
//     this.getId=()=>{
//         return id;
//     }
// }
// let a1=new a();
// a1.setId(100);
// console.log(a1.getId());


// class Employee{
//     #id;
//     setId(id){
//         this.#id=id;
//     }
//     getId(){
//         return this.#id;
//     }
// }
// let e=new Employee();
// e.setId(102);
// console.log(e.getId());

// class Employee{
//     constructor(){
//         let id;
//         this.setId= function(id1){
//             id=id1;
//         }
//         this.getId=function(){
//             return id;
//         }
//     }
// }

// class Sales extends Employee{
//     constructor(){
//         super();
//         let target;
//         this.setTarget=function(target1){
//             target=target1;
//         }
//         this.getTarget=function(){
//             return target;
//         }
//     }
// }
// let s=new Sales();
// s.id=10;
// console.log(s.getId());

// const Employee={
//     function a(){

//     }
// }

// function b(c){
//     let d=new c();
// }
// b(Employee.a);

// function a(){
//     let id=10;
//     this.setId=function(){
//         console.log(id);
//     }
// }
// let a1=new a(); 


// setTimeout(()=>{
//     console.log("Time expires");
// },1000);
// let date =new Date().getTime();
// // console.log(date);
// let endDate=date;
// while(endDate<date+10000){
//     endDate=new Date().getTime();
// }

// let date=new Date().getTime();
// console.log(date);
// end=date+1000;
// while(date<end){
//     date=new Date().getTime();
// }
// console.log("start");
// end=date;
// while(date<end+1000){
//     date=new Date().getTime();
// }
// console.log("callback");
// end=date;
// while(date<end+1000){
//     date=new Date().getTime();
// }
// console.log("End");

// const radius=[1,3,6,4];

// const area=(radius)=>{
//     return parseFloat(((3.14*radius*radius).toString()).slice(0,((3.14*radius*radius).toString()).indexOf('.')+3))
// }
// function a(radius,logic){
//     const area=[];
//     function areafunction(res){   
//         area.unshift(logic(res));
//         console.log(Math.trunc(logic(res)));
//     }
//     radius.forEach(areafunction);
//     return area;
// }
// console.log(a(radius,area));

// console.log(radius.map((res)=>{
//     return parseFloat(((Math.PI*res*res).toString()).slice(0,((Math.PI*res*res).toString()).indexOf('.')+3));
// }));


// const array={
//     a:radius,
//     map(res){
//         let b=[];
//         for(let i=0;i<this.a.length;i++){
//             b.push(res(this.a[i]));
//         }
//         return b;
//     }
// };
// console.log(array.map((res)=>{
//     return Math.PI*res*res;
// }));

// Array.prototype.myMap=function(res){
//     let b=[];
//     for(let i=0;i<this.length;i++){
//         b.push(res(this[i]));
//     }
//     return b;
// }
// // Array.prototype.myMap();
// console.log(radius.myMap((res)=>{
//     return Math.PI*res*res;
// }));

// const a=[1,3,6,4];

// console.log(a.reduce((res,cur)=>{
//     return res*cur;
// }));

// Array.prototype.myReduce=function(logic){
//     let result=this[0];
//     for(let i=1;i<this.length;i++){
//         result=logic(result,this[i]);
//     }
//     return result;
// }
// console.log(a.myReduce((res,cur)=>{
//     return res*cur;
// }));

// const a=[4,3,2,5,6];
// Array.prototype.myfilter=function(logic){
//     for(i=0;i<this.length;i++){
//         if(logic(this[i])==false){
//             this.splice(i,1);
//         }
//     }
// }
// console.log(a);
// a.myfilter((res)=>{
//     if(res%2==0){
//         return true;
//     }
//     return false;
// });
// console.log(a);
const b={
    id:45,
    name:"mohit",
    setId(){
        console.log(this.id);    
    }
}
const c={
    salary:67000
};
b.__proto__=c;
console.log(b.salary);