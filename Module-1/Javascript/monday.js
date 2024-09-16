

let a=document.getElementById("mohit").children;

// while(true){
//     setTimeout(()=>{
//         a["name"].textContent="Name:-Dinesh Gohel";
//         setTimeout(()=>{
//             a["fname"].textContent="Father Name:-Bhupat Gohel";
//             setTimeout(()=>{
//                 a["name"].textContent="Name:-Mohit Dinesh Gohel";
//                 setTimeout(()=>{
//                     a["fname"].textContent="Father Name:-Dinesh Gohel";
//                 },1000);
//             },1000);
//         },1000);
//     },1000)
// }

async function change(were,text){
    return new Promise((resolv,reject)=>{
        setTimeout(()=>{
            were.textContent=text;
            resolv("");
        },1000);
    })
}
async function makeChange(){
    while(true){
        await change(a["name"],"Name:-Dinesh Gohel");
        await change(a["fname"],"Father Name:-Bhupat Gohel");
        await change(a["name"],"Name:-Mohit Dinesh Gohel");
        await change(a["fname"],"Father Name:-Dinesh Gohel");
    }
}
makeChange();

let m=new Map();
m.set("india",["maharashtra","tamil nadu","Andra pradesh","gujrat"]);
m.set("Australia",["queensland","melborne","sydney"]);
m.set("America",["new york","california","boston","texas"]);


document.getElementById("choose").innerHTML=getchoose();
function getchoose(){
    let result=``;
    m.forEach((value,key,map)=>{
        console.log("I am called");
        result+=`<option>${key}</option>`;
    })
    console.log(result);
    return result;
}
document.getElementById("choose").addEventListener('change',()=>{
    let val=document.getElementById("choose").value;
    document.getElementById("afterchoose").innerHTML=afterchoose(val);
})
function afterchoose(val){
    let result=``;
    m.forEach((value,key,map)=>{
        if(key==val){
            console.log("I am here");
            value.forEach((res)=>{
                result+=`<option>${res}</option>\n`;
            })
        }
    })
    return result;
}

document.getElementById("afterchoose").addEventListener('change',()=>{
    let choose1=document.getElementById("choose").value;
    let choose2=document.getElementById("afterchoose").value;
    localStorage.setItem("choose1",choose1);
    localStorage.setItem("choose2",choose2);
    location.href="mondaynext.html";
})