let userArray=[];
localStorage.setItem("userArray",userArray);
document.getElementById("button").addEventListener('mouseover',()=>{
    let name=document.getElementById("name").value;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let enterpassword=document.getElementById("enterpassword").value;
    if(name.length!=0 && username.length!=0 && password.length!=0 && enterpassword.length!=0){
        if(password==enterpassword){
            document.getElementById("button").textContent="Submit";
        }else{
            document.getElementById("button").textContent="Don't Submit";
        }
    }else{
        document.getElementById("button").textContent="Don't Submit";
    }
})

document.getElementById("button").addEventListener('click',()=>{
    if(document.getElementById("button").textContent=="Submit"){
        userArray.push({
            name:document.getElementById("name").value,
            username:document.getElementById("username").value,
            password:document.getElementById("password").value,
            toString(){
                return `name=${this.name}\nusername=${this.username}\npassword=${this.password}`;
            }
        });
        localStorage.setItem("userArray",JSON.stringify(userArray));
        console.log(userArray[userArray.length-1].toString());
    }
})