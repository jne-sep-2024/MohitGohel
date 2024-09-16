// let a=100;
// function e(){
//     let a=111;
//     function c(b){
//         function d(){
//             console.log(a,b);
//         }
//         // var a=10;
//         return d;
//     }
//     a=200;
//     return c;

const { rejectSeries } = require("async");

// }
// let a=100;
// e()(101)();
// console.log(a);

// let a=101;
// a=900;
// console.log(a);
// function a(b){
//     console.log(b);
// }

// for(let i=0;i<=5;i++){
//     setTimeout(()=>{
//         a(i);
//     },1000);
// }

// function a(){
//     let count=0;
//     return ()=>{
//         count++;
//         console.log(count);
//     }
// }
// let counter=a();
// counter();
// counter();

// let counter1=a();
// counter1();
// counter1();

// class F{
//     counter=0;
//     a(){
//         this.counter++;
//         console.log(this.counter);
//     }
//     b(){
//         counter--;
//         console.log(this.counter);
//     }
// }

// let f=new F();
// f.a();
// f.a();

// function A(){
//     let count=1;
//     this.a=()=>{
//         count++;
//         console.log(count);
//     }
//     this.b=()=>{
//         count--;
//         console.log(count);
//     }
// }
// let c=new A();
// c.a();
// c.b();


// function Employee(){
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

// function Sales(){
//     let emp=new Employee();
//     let target;

//     this.getemp=()=>{
//         return emp;
//     }
// }

// // let e=new Employee();

// // e.setId(10);
// // console.log(e.getId());

// let s=new Sales();
// s.getemp().setId(10);
// console.log(s.getemp().getId());


// const a={

//     b:function (){
//         this.c=10;
//     }
// };
// let c1=new a.b();
// console.log(c1.c);

// function Outer(){
//     let a=10;
//     this.increment=()=>{
//         a++;
//         return a;
//     }
//     this.decrement=()=>{
//         a--;
//         return a;
//     }
// }

// let d=new Outer();
// console.log(d.increment());
// console.log(d.decrement());
// console.log(d.increment());


// function statement
// a();
// function a(){
//     console.log("a is called");
// }
// // function expression 
// let b=function (){
//     console.log("b is called");
// }
// b();

// Anonymous functions
// (function (){
//     console.log("IIFE is called");
// })();


// class a{

//     constructor(){
//         console.log("i am called");
//     }
//     setA(){
//         this.ab=10;
//     }

// }
// let b=new a();
// b.setA();
// console.log(b.ab);

// let a=function b(){
//     console.log("b is called");
// }
// b();


// let a= function xyz(n){
//     if(n!=0){
//         xyz(n-1);
//         console.log(n);
//     }
// }
// a(10);



// function a2(b){
//     let a=1000;
//     return b;
// }

// let a=100;
// function c(){
//     console.log(a);
// }
// a2(c)();



// async function b(j){
// return new Promise((resolv,reject)=>{
//     setTimeout(()=>{
//         console.log(j);
//         // reject("not received");
//         // resolv("received");
//     },1000);
// })
// }
// async function c(){
//     let i=1;
//     await b(i++);
//     await b(i++);
// }
// c();
console.log(10);