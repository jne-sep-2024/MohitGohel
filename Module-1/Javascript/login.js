document.getElementById("submit").addEventListener('mouseover',()=>{
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username.length==0 || password.length==0){
        document.getElementById("submit").textContent="Don't submit";
    }else {
        document.getElementById("submit").textContent="submit";
    }
})

document.getElementById("submit").addEventListener('click',()=>{
    if(document.getElementById("submit").textContent=="submit"){
        localStorage.setItem("name",document.getElementById("username").value);
        localStorage.setItem("pass",document.getElementById("password").value);
        window.location.href="welcome.html";
    }
})