// fetch('https://reqres.in/api/users',{
//     method :'POST',
//     // headers :{
//     //     'Content-Type' : 'application/json'
//     // },
//     // body: JSON.stringify({
//     //     name : 'User 1'
//     // })
// }).then((res)=>{
//     if(res.ok){
//         return res.json();
//     }else{
//         console.log("not success");
//     }
// }).then((res)=>console.log(res));


fetch('https://reqres.in/api/users',{
    // method :'POST',
    // headers :{
    //     'Content-Type':'application/json'
    // },
    // body :JSON.stringify({
    //     name : 'USER 1',
    // })
}).then((res)=>{
    if(res.ok){
        return res.json();
    }else{
        console.log("unsuccessfull");
    }
    // return res.json();
}).then((res)=>{
    console.log(res);
})