let i=1;
document.getElementById("addpost").addEventListener('click',()=>{
    let result='<input id="postadd"/><br><button id="submit">Submit</button>';
    document.getElementById("inputbox").innerHTML=result;
    document.getElementById("submit").addEventListener('click',()=>{
        let val=document.getElementById('postadd').value;
        if(val.length!=0){
            let create=document.createElement('div');
            create.style.width = '200px';
            create.style.height = '100px';
            create.style.border = `1px solid black`;
            create.style.padding=` 10px`;
            create.margin= `10px`;
            create.innerHTML=`<p>${val}</p><p id=time${i}>Now</p><p align="right">Mohit G</p>`;
            document.getElementById("displayblogs").appendChild(create);
            async function timer(pid,secs){
                return new Promise((resovl,reject)=>{
                    setTimeout(()=>{
                        document.getElementById(`time${pid}`).textContent=`${secs} min ago`;
                        resovl("");
                    },1000*60);
                })
            }
            async function callTimer(){
                let j=1;
                let pid=i;
                while(true){
                    await timer(pid,j);
                    j++;
                }
            }
            callTimer();
            i++;
            document.getElementById("inputbox").innerHTML="";
        }
    })
})