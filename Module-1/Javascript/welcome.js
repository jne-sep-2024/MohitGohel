let result=`username=${localStorage.getItem("name")}\npassword=${localStorage.getItem("pass")}`;
document.getElementById("userpass").innerText=result;