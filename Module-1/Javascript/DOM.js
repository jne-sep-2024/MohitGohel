// console.log("Hello");
// alert("Hello");

// window.console.log("hello");

// const emp={
//     id: 56,
//     name:"mohit",
//     salary: 56000,
//     address:{
//         city:"nanded",
//         state: "maharashtra"
//     }
// };
// console.log(emp.address.city);

// console.dir(window);

// const a={
//     id:45,
//     name:"name",
//     salary: 56000
// };
// console.log(a.id);

// let button=document.getElementById("button");
// console.log(button.tagName);

let empArray=[];
function a(){
    let id1=document.getElementById("empid");
    let name1=document.getElementById("empname");
    let salary1=document.getElementById("empsalary");
    let emp={
        id:id1.value,
        name:name1.value,
        salary:salary1.value
    };
    empArray.push(emp);
    id1.value="";
    name1.value="";
    salary1.value="";
}
function b(){
    let result="";
    // for(let i=0;i<empArray.length;i++){
    //     result+=`id=${empArray[i].id}\nname=${empArray[i].name}\nsalary=${empArray[i].salary}\n\n`;
    // }
    empArray.forEach((i)=>{
        result+=`id=${i.id}\nname=${i.name}\nsalary=${i.salary}\n\n`;
    })
    document.getElementById("display").innerText=result;
}
document.getElementById("submit").addEventListener('click',a);
document.getElementById("seeData").addEventListener('click',b);

