// for(;;){
//     console.log("mohit");  
// }

// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// while(i<=11){

//     console.log("I am in while");
//     i++;
// }
// console.log(i);

// do{

//     console.log("I ma in do while");
//     i++;
// }while(i<=12)


// let str="mohit gohel";
// let count=0;
// for(let i of str){
//     count++;
// }
// console.log(count);

// for(let i of str){
//     console.log(i);
// }

// const s={
//     id: 45,
//     name:"mohit",
//     salary:56789
// };
// console.log(typeof s);

// console.log(s.id);
// for(let i in s){
//     console["log"](s[i]);
// }

// for(let a=0;a<=100;a++){
//     if(a%2==0){
//         console.log(a);
//     }
// }

let a=34;
while(true){

    let v=parseInt(prompt("guess the number="));

    if(!Number.isNaN(v) && v==a){
        alert("your guess is right");
        break;
    }
    else{
        alert("Try again");
    }

}