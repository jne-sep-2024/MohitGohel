// // let a=parseInt(prompt("Enter any number="));

// if(Number.isNaN(a)){
//     // alert("Not a Number");
// }
// else if(a%5==0){
//     alert("Divisible");
// }else{
//     alert("Not divisible");
// }

// a=3.456;
// console.log((a-Math.trunc(a)).toPrecision(2));

let a=parseInt(prompt("Enter your grades"));

if(!Number.isNaN(a)){
    if(a>100){
        alert("Enter marks less than or equal to 100");
    }
    else if(a<=100 && a>=80){
        alert("A");
    }else if(a<80 && a>=70){
        alert("B");
    }else{
        alert("F");
    }
}