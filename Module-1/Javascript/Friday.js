// let a="abbacd";
// let lss="";
// for(let i=0;i<a.length;i++){
//     let str=a[i];
//     for(let j=i+1;j<a.length;j++){
//         str+=a[j];
//         if(repetaion(str)){
//             if(lss.length<str.length){
//                 lss=str;
//             }
//         }
//     }
// }
// console.log(lss);
// // function longestSubstring(str){
// //     for(let i=0;i<str.length/2;i++){
// //         if(str[i]!=str[str.length-i-1]){
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// function repetaion(str){
//     for(let i=0;i<str.length;i++){
//         for(let j=i+1;j<str.length;j++){
//             if(str[i]==str[j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(b);
// console.log(a);
// {
//     var b=10;
//     let a=10;
// }

// let map=new Map();
// map.set(1,'mohit');
// map.set(1,'loka');
// console.log(map);
// console.log(map.has(1));

// const a={id:'mohit'};
// Object.freeze(a);
// const b={name:1};
// // Object.assign(a,b);
// a.id=2;
// // console.log(a);
// b.name=2;
// console.log(a);
// console.log(b);
// delete b.name;
// console.log(b);

// try{
//     throw Error("Something Issue has Come up");
// }catch(error){
    
// }

// let a="4,5,6,7,8,9";
// console.log(a.split(','));

// class Mohit{
//     static #i=100;
//     constructor(){
//         console.log(Mohit.#i);
//     }
//     static loka(){
//         console.log("I am here in static method");
//     }
// }
// let m=new Mohit();
// console.log(Mohit.i);

class Employee{
    #id;
    #name;
    #salary;
    setId(id){
        this.#id=id;
    }
    setName(name){
        this.#name;
    }
    setSalary(salary){
        this.#salary=salary;
    }
    display(){
        console.log("i am inside the Employee class");
    }
}
class SM extends Employee{
    #target;
    setTarget(target){
        this.#target=target;
    }
    display(){
        console.log("i am inside the employee of class");
    }
}    
let emp=new SM();
if(emp instanceof Employee){
    if(emp instanceof SM){
        console.log("I am here");
    }
}
