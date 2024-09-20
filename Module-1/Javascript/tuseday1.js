let a=["Then click here","Want to go back"];

async function changeContent(b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById("goback").textContent=b;
            resolve("");
        },500);
    })
}
async function change(){
    while(true){
        for(i=0;i<a.length;i++){
            await changeContent(a[i]);
        }
    }
}
change();

console.log((document.getElementsByClassName("mohit1")[0].children)[0].getAttribute('href'));
// console.log((document.getElementsByClassName("mohit1")[1]).textContent="timer");
function timer(){
    for(let i=1;i<=10;i++){
        setTimeout(()=>{
            if(i==10){
                (document.getElementsByClassName("mohit1")[1]).textContent=`${i}`;
                (document.getElementsByClassName("mohit1")[0].children)[0].setAttribute('href',"tuesday.html");
                console.log((document.getElementsByClassName("mohit1")[0].children)[0].getAttribute('href'));
            }else{
                (document.getElementsByClassName("mohit1")[1]).textContent=`${i}`;
            }
        },i*1000);
    }
}
timer();


