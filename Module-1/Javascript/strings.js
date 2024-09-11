// let s="mohit gohel";
// console.log(s.length);

// for(let i of s){
//     console.log(i);
// }

// for(let i=0;i<s.length;i++){
//     console.log(s[i]);
// }
// let str=`this my string ${s}`;
// console.log(str);
// str=str+`${45}`;
// console.log(str);

// console.log(str.length);
// str=str.toUpperCase();
// console.log(str);
// // str.trim();
// str="                 str            ";
// str=str.trim();
// console.log(str);


str="mohit gohel";
// console.log(str.slice(0,2));
// console.log(str);

// console.log(str.concat(" Dinesh"));
// console.log(str);
// str=str.replace(/o/g,'i');
// console.log(str);

// for(let i=0;i<str.length;i++){
//     console.log(s.charAt(i));
// }

// for(let i of str){
//     console.log(i);
// }

// str="mohit Dinesh Gohel is good boy";
// for(let i of "mohit"){
//     console.log(i);
// }

// console.log(str.replace(/i/g,"o"));


str=prompt("Enter your full name");
// str=parseInt(str);
let flag=false;
str1=""
str=str.trim();
console.log(str);
for(let i of str){
    console.log(i);
    if(Number.isNaN(parseInt(i))==false){
        alert("Name must contain only alphabets");
        flag=true;
        break;
    }
    if(i!=' '){
        str1+=i;
    }
}
if(!flag)
    alert(`@${str1}${str1.length}`);