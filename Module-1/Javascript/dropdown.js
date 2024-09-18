
// let India=['maharashtra','delhi','tamilNadu','karnataka'];
// let Australia=['queensland','melborne','sydney'];
// let England=['united kindom','texas'];
// let Newyork=['california','washinton'];

const map1=new Map();
map1.set('India',['maharashtra','delhi','tamilNadu','karnataka']);
map1.set('Australia',['queensland','melborne','sydney']);
map1.set('England',['united kindom','texas']);
map1.set('America',['california','washinton']);
console.log(map1);
map1.delete('Australia');
console.log(map1);

console.log(map1.has('England'));

// // const d={
// //     india:['maharashtra','delhi','tamilNadu','karnataka'],
// //     australia:['queensland','melborne','sydney'],
// //     england:['united kindom','texas'],
// //     newyork:['california','washinton']
// // };
// document.getElementById("selection").addEventListener('change',()=>{
//     let b=document.getElementById("selection").value;
//     let result=``;
//     // if(b=='India'){
//     //     for(let i=0;i<India.length;i++){
//     //         result+=`<option>${india[i]}</option>\n`;
//     //     }
//     //     document.getElementById("onselection").innerHTML=result;
//     // }else if(b=='Australia'){
//     //     for(let i=0;i<Australia.length;i++){
//     //         result+=`<option>${Australia[i]}</option>\n`;
//     //     }
//     //     document.getElementById("onselection").innerHTML=result;
//     // }else if(b=='England'){
//     //     for(let i=0;i<England.length;i++){
//     //         result+=`<option>${england[i]}</option>\n`;
//     //     }
//     //     document.getElementById("onselection").innerHTML=result;
//     // }else{
//     //     for(let i=0;i<Newyork.length;i++){
//     //         result+=`<option>${newyork[i]}</option>\n`;
//     //     }
//     //     document.getElementById("onselection").innerHTML=result;
//     // }
//     map1.forEach((value,key,map2)=>{
//         if(b==key){
//             let result=``;
//             for(let i=0;i<value.length;i++){
//                 result+=`<option>${value[i]}</option>\n`;
//             }
//             document.getElementById("onselection").innerHTML=result;
//         }
//     })
//     // let result=`<option>Delhi</option>\n
//     //             <option>New York</option>\n
//     //             <option>Thailand</option>`
//     // document.getElementById("onselection").innerHTML=result;
// })