// let arr=[4,5,3,6,7,8,"mohit",56.7];
// for(let i of arr){
//     console.log(i);
// }

// console.log(arr.length);

// console.log(typeof arr);

// for(let i in arr){
//     console.log(arr[i]);
// }

// for(let i=1;i<arr.length;i++){
//     console.log(arr[i]);
// }

// console.log(arr);
// console.log(arr);
// for(let i in arr){
//     if(typeof arr[i] =='string'){
//         arr[i]=arr[i].toUpperCase();
//     }
// }
// console.log(arr);
// let size=parseInt(prompt("Enter the size of the array"));
// if(Number.isNaN(size)==false){
//     let arr=[];
//     let i=0;
//     size--;
//     let sum=0;
//     while(size!=-1){
//         // arr[size]=prompt("Enter "+(i+1)+"th Element");
//         arr.splice(i,0,prompt("Enter "+(i+1)+"th Element"));
//         // arr[size]=parseInt(arr[size]);
//         // alert(arr[size]);
//         console.log(arr);
//         if(!Number.isNaN(parseInt(arr[i]))){
//             arr[i]=parseInt(arr[i]);
//             sum+=arr[i];
//             alert("I am here");
//         }
//         size--;
//         i++;
//     }
//     alert(arr);
//     alert(sum);
//     let j=0;
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i]!='number'){
//             console.log(arr[i]);
//             console.log(i,"",arr[i]);
//             arr.splice(arr[i],1);
//             // arr.splice(0,'t');
//             console.log("after splice="+arr);
//             i--;
//         }
//     }
//     alert(arr);
//     console.log(arr);
// }
// let str="mohit";
// console.log(str.slice(1));

// let arr=[];
// arr.splice(1,0,2.3);
// arr.splice(1,0,2.5);
// arr[1]=2.3
// arr.splice(1,0,2.3);
// arr.splice(3,4);
// arr.splice(1,0,3.4);
// console.log(arr);

// for(let i of arr){
//     console.log(i);
// }

////////////////////////////////////////////////////////////////////////
// let a=[1,2,3,4,5,2,1,3,4]

// console.log(a);
// for(let i of a){
//     for(let j=a.indexOf(i)+1;j<a.length;j++){
//         if(i==a[j]){
//             a.splice(j,1);
//             j--;
//         }
//     }
// }
// console.log(a);

// console.log(a.toString());
// console.log(a.toString());
// console.log(a.indexOf(3));

// a.unshift(2);
// console.log(a);
// a.push(4);
// console.log(a);

// console.log(a.pop());

// // a=a.toString();
// console.log(typeof a);
// console.log(a.slice(1,4));

// console.log(a.shift());
// console.log(a);

// let b=[5,6,7];

// b=b.concat(a);
// console.log(b);

let a=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(a);
console.log(a.shift());
console.log(a);

a.splice(a.indexOf("Uber"),1,"Ola");
console.log(a);

a.push("Amazon");
console.log(a);