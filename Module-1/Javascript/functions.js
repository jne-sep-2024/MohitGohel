

// const a=(n)=>{
//     for(let i=0;i<=n;i++){
//         // if(i==5){
//         //     return i;
//         // }
//         console.log(i);
//     }
// }
// console.log(a(20));
// console.log(typeof a);
// a=10;
// a();


// for(let i=0;i<=10;i++){
//     if(i==5){
//         return i;
//     }
//     console.log(i);
// }


// function vowel(str){
//     let count=0;
//     for(let i of str){
//         if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
//             count++;
//         }
//     }
//     return count;
// }

// var vowel=(str)=>{
//         let count=0;
//         for(let i of str){
//             if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
//                 count++;
//             }
//         }
//         return count;
// }
// console.log(vowel("mohit"));


let arr=[1,2,34,4,89,90,91];
// function a(val){

//     if(val%2==0){
//         console.log(val);
//     }
// }
// arr.forEach((val)=>{

//     if(val%2==0){
//         console.log(val);
//     }
// });
// let square=(val)=>{
//     console.log(val*val);
// }
// arr.forEach(square); 

// console.log(arr.map((val,index)=>{
//     return val*index;
// }))

// let newArr=arr.filter((val,index)=>{
//     if(index%2==0){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(newArr);


// console.log(arr.reduce((res,cur)=>{
//     if(res<cur){
//         res=cur;
//     }
//     return res;

// }));

// let newArr=arr.filter((val)=>val>90);
// console.log(newArr);


let n=parseInt(prompt("Enter any positive integer number"));
let a=[];
for(let i=1;i<=n;i++){
    a.splice(i-1,0,i);
}
console.log(a.reduce((res,cur)=>{
    res=res+cur;
    return res;
}));

console.log(a.reduce((res,cur)=>{
    return res*cur;
}));