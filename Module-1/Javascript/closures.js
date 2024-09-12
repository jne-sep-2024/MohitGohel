// function a(){
//     var c=10;

//     function b(){
//         console.log(c);
//     }
//     b();
// }
// a();


// function a(){
//     var c=10;
//     let d=function b(){
//         console.log(c);
//     }
//     console.log(d);
// }
// a();


// function a(){
//     let c=10;
//     function b(){
//         console.log(c);
//     }
//     return b;
// }
// // a()();
// let b=a();
// console.log(typeof b);


// function x(){
//     let a=10;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// x()();


// function c(){
//     let d={
//         id:67,
//         name:"mohit",
//         salary:90000
//     };
//     function a(){
//         // let a=10;
//         return ()=>{ return d};
//     }
//     return a;
// }
// console.log(c()()()["id"]);

// let c=100;
// function a(b){
//     let c=10;
//     b();
// }
// a(b);
// function b(){
//     console.log(c);
// }


// function a(){
//     for(var i=1;i<=5;i++){
//         function b(i){
//             setTimeout(function(){console.log(i)},i*1000);
//         }
//         b(i);
//     }
//     for(let i=10;i<=15;i++){
//         console.log(i);
//     }
// }
// a(); 

// let b1=1;
// function c(b1){
//     let d=function b(){
//         console.log(b1);
//     }
//     setTimeout(d,1000);
// }
// c(b1);
// b1++;
// console.log("I am in b1");

// setTimeout(()=>{
//     console.log("Hello")
// },3000);


// function sum(){
//     return a+b;
// }

// function call(sumcallback){
//     console.log(sumcallback());
// }
// let a=10;
// let b=20;
// call(sum);


// let data=90;
// function grtData(data){
//     setTimeout(()=>b(),0);
// }
// grtData(67);

// function b(){
//     console.log(data);
// }
// console.log("I am here");
// function c(){
//     console.log(data);
// }

// b(c);
// function c(){
//     console.log(" i am in c");
// }
// function b(c){
//     c();
//     // console.log(typeof c);
// }


// let a=(data)=>{
//     var a=1000*data;
//     setTimeout(()=>{console.log(data)},a);
// }
// a(1);
// a(2);
// a(3);

// function f(data,delay){
//     setTimeout(()=>{
//         console.log(data);
//         // if(typeof delay!=typeof undefined)
//         //     delay();
//         if(delay){
//             delay();
//         }
//     },1000);
// }
// f(45,()=>{
//     f(450);
// });
// f(450);



// function f(data,delay){
//     setTimeout(()=>{console.log(data)
//         if(delay){
//             delay();
//         }
//     },1000);
// }
// var i=1;
// // function a(){
// //     i++;
// //     f(i,a);
// // }
// ////////////////////////////Call back Hell/////////////////////////////
// f(1,()=>{
//     console.log("getting data",(i+1));
//     f(++i,()=>{
//         console.log("getting data",(i+1));
//         f(++i)})}
// );


