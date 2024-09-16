
let userArray=JSON.parse(localStorage.getItem("userArray"));
console.log(userArray);

document.getElementById("button").addEventListener('mouseover',()=>{
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username.length!=0 && password.length!=0){
        let b=false;
        for(let i=0;i<userArray.length;i++){
            console.log(userArray[i].username);
            if(userArray[i].username==username && userArray[i].password==password){
                document.getElementById("button").textContent="Submit";
                b=true;
                break;
            }
        }
        if(!b){
            document.getElementById("button").textContent="Don't Submit";
        }
    }else{
        document.getElementById("button").textContent="Don't Submit";
    }
})
document.getElementById("button").addEventListener('click',()=>{
    if(document.getElementById("button").textContent=="Submit"){
        document.getElementById("valid").innerText="valid user";
    }
})