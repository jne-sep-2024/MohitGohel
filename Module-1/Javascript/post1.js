
let arr=[];
if(localStorage.getItem('previousBlog')!=null){
    arr=arr.concat(JSON.parse(localStorage.getItem('previousBlog')));
    console.log(arr);
    for(let k=0;k<arr.length;k++){
        let previous=document.createElement('div');
        previous.style.width = '200px';
        previous.style.height = '100px';
        previous.style.border = `1px solid black`;
        previous.style.padding=` 10px`;
        previous.margin= `10px`;
        let eachtime=Math.trunc(((new Date().getTime())-arr[k].time)/(1000*60));
        previous.innerHTML=`<p>${arr[k].value}</p><br><p id="para${k}">${eachtime} min ago</p>`;
        document.getElementById("displayblogs").appendChild(previous);
        async function calltimer(pid1,sec1){
            return new Promise((resovl,reject)=>{
                setTimeout(() => {
                    let preTime=document.getElementById(`para${pid1}`);
                    document.getElementById(`para${pid1}`).textContent=`${sec1} min Ago`;
                    resovl("");
                }, 1000*60);
            })
        }
        async function timer(){
            let j1=1;
            let pid1=k;
            while(true){
                await calltimer(pid1,((Math.trunc(((new Date().getTime())-arr[pid1].time)/(1000*60)))+j1));
                j1++;
            }
        }
        timer();
    }
}
let i=arr.length;
document.getElementById("addpost").addEventListener('click',()=>{
    let result=`<input id="entertext"/><br><button id="submit">submit</button>`;
    document.getElementById("inputbox").innerHTML=result;
    document.getElementById("submit").addEventListener('click',()=>{
        let val=document.getElementById("entertext").value;
        if(val.length!=0){
            let time=new Date().getTime();
            arr.push({value:val,time:time});
            localStorage.setItem('previousBlog',JSON.stringify(arr));
            let previous=document.createElement('div');
            previous.style.width = '200px';
            previous.style.height = '100px';
            previous.style.border = `1px solid black`;
            previous.style.padding=` 10px`;
            previous.margin= `10px`;
            previous.innerHTML=`<p>${val}</p><br><p id="para${i}">Now</p>`;
            document.getElementById("displayblogs").appendChild(previous);
            async function calltimer(pid,sec){
                return new Promise((resovl,reject)=>{
                    setTimeout(() => {
                        document.getElementById(`para${pid}`).textContent=`${sec} min Ago`;
                        resovl("");
                    }, 1000*60);
                })
            }
            async function timer(){
                let j=1;
                let pid=i;
                while(true){
                    await calltimer(pid,j);
                    j++;
                }
            }
            timer();
            i++;
        }
    })    
})