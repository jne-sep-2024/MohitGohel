

function id(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
        let row="";
        data.forEach((i)=>{
            row+=
            `<tr>
                <td>${i.id}</td>
                <td>${i.username}</td>
                <td>${i.email}</td>
                <td>${i.phone}</td>
            </tr>
            `
      })
      console.log(row);
      document.getElementById("one").innerHTML = row;
      }
    );
}
// id();


// function name1(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data =>data.forEach((i)=>{
//             console.log(i["name"]);
//       }));
// }
// name1();

// function username(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data =>data.forEach((i)=>{
//             console.log(i["username"]);
//       }));
// }
// username();

// function phone(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data =>data.forEach((i)=>{
//             console.log(i["phone"]);
//       }));
// }
// phone();
// fetch("https://jsonplaceholder.typicode.com/users").then(
//     res => {
//       res.json().then(
//         data => {
//           console.log(data);
//           if (data.length > 0) {
  
// //             var temp = "";
// //             data.forEach((itemData) => {
// //               temp += "<tr>";
// //               temp += "<td>" + itemData.id + "</td>";
// //               temp += "<td>" + itemData.employee_name + "</td>";
// //               temp += "<td>" + itemData.employee_salary + "</td>";
// //             });
// //             document.getElementById('data').innerHTML = temp;
// //           }
// //         }
// //       )
// //     }
// //   )



// let a=[{ id : 45,name : "mohit"},{ id :46,name : "omkar"}];

// let b;

// // console.log(a);

// // b.push(a[0]);
// // console.log(b);


// function mypromise(){
//     return new Promise((resolve,reject)=>{
//         resolve([{ id : 45,name : "mohit"},{ id :46,name : "omkar"}]);
//     })
// }
// mypromise().then((res)=>{
//     // console.log(res.length);
//     b=res;
    
// })
// console.log(b);