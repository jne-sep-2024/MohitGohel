

// while(a!=0){
//     console.log(a);
//     a--;
// }
// let a=10;
// recur(a);
// function recur(a){
//     if(a!=0){
//         recur(a-1);
//         console.log(a);
//     }
// }
// console.log(a);
// let s="";
// for(let i=1;i<=10;i++){
//     if(i==1){
//         s=s+i;
//     }else{
//         s=s+" "+i;
//     }
// }
// console.log(s);

let a=parseInt(prompt("Enter anu Number="));
let sum=0;
function sumofn(c){

    // if(c!=0){
    //     sumofn(c-1);
    //     sum=sum+c;
    // }
    for(let i=1;i<=c;i++){
        sum=sum+i;
    }
}
if(!Number.isNaN(a)){
    sumofn(a);
    alert(sum);
}
else{
    alert("Enter valid input");
}