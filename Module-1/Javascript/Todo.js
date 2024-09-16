let task=[];
let priorityArray=["High","Medium","low","highest"];
let categoryArray=["personal","work"];
document.getElementById("Add Task").addEventListener('click',()=>{
    let result=``;
    result+=`<label>Enter Name:-</label>
            <input id="taskname"/><br>
            <labe>Priority</label>
            <select id="priority">
            <option></option>
            <option>High</option>
            <option>Medium</option>
            <option>low</option>
            <option>highest</option>
            </select><br>
            <select id="category">
            <option></option>
            <option>personal</option>
            <option>work</option>
            </select><br>
            <label for="date">Choose a date:</label>
        <input type="date" id="date" name="date"><br>
        <button id="submit">Don't Submit</button>
        `
    document.getElementById("display").innerHTML=result;
    console.log((document.getElementById("date").value).length);
    document.getElementById("submit").addEventListener('mouseover',()=>{
        let taskname=document.getElementById("taskname").value;
        let priority=document.getElementById("priority").value;
        let category=document.getElementById("category").value;
        let date=document.getElementById("date").value;
        if(taskname.length!=0 && priority.length!=0 && category.length!=0 && date.length!=0){
            let day=new Date(date).getDate();
            let month=new Date(date).getMonth()+1;
            let year=new Date(date).getFullYear();
            console.log(day,month,year);
            let todayday=new Date().getDate();
            let todaymonth=new Date().getMonth()+1;
            let todayyear=new Date().getFullYear();
            console.log(todayday,todaymonth,todayyear);
            if(year==todayyear && month==todaymonth && day>=todayday){
                document.getElementById("submit").textContent="Submit";
            }else if(year>todayyear){
                document.getElementById("submit").textContent="Submit";
            }else if(year==todayyear && month>todaymonth){
                document.getElementById("submit").textContent="Submit";
            }
            else{
                document.getElementById("submit").textContent="Don't Submit";
            }
        }else{
            document.getElementById("submit").textContent="Don't Submit";
        }
    })
    document.getElementById("submit").addEventListener('click',()=>{
        if(document.getElementById("submit").textContent=="Submit"){
            task.push({
                taskname:document.getElementById("taskname").value,
                priority:document.getElementById("priority").value,
                category:document.getElementById("category").value,
                day:new Date(document.getElementById("date").value).getDate(),
                month:new Date(document.getElementById("date").value).getMonth()+1,
                year:new Date(document.getElementById("date").value).getFullYear(),
                toString(){
                    return `taskname=${this.taskname}\npriority=${this.priority}\ncategory=${this.category}\ndate=${this.day}/${this.month}/${this.year}\n`;
                }
            });
            console.log(task[task.length-1].toString());
        }
    })
});

document.getElementById("Today's Task").addEventListener('click',()=>{
    document.getElementById("display").innerText="";
    
    let result=`<table>
                <thead>
                <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Category</th>
                <th>Date</th>
                </tr>
                </thead>
                <tbody>\n`;
    task.forEach((res)=>{
        result+=`<tr>
                <td>${res.taskname}</td>
                <td>${res.priority}</td>
                <td>${res.category}</td>
                <td>${res.day}/${res.month}/${res.year}</td>
                </tr>`
    })
    result+=`</tbody>\n</table>`;
    document.getElementById("display").innerHTML=result;
});
document.getElementById("Delete The Task").addEventListener('click',()=>{
        let result=`<table>
        <thead>
        <tr>
        <th>Task Name</th>
        <th>Priority</th>
        <th>Category</th>
        <th>Date</th>
        <th>Button</th>
        </tr>
        </thead>
        <tbody>\n`;
        let i=1;
    task.forEach((res)=>{
    result+=`<tr>
        <td>${res.taskname}</td>
        <td>${res.priority}</td>
        <td>${res.category}</td>
        <td>${res.day}/${res.month}/${res.year}</td>
        <td><button id="Task${i++}">Delete</button></td>
        </tr>`
    })
    result+=`</tbody>\n</table>`;
    document.getElementById("display").innerHTML=result;
    let j=0;
    task.forEach((res)=>{
        let k=j;
        document.getElementById(`Task${k+1}`).addEventListener('click',()=>{
            task.splice(k,1);
            let result=`<table>
            <thead>
            <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Date</th>
            <th>Button</th>
            </tr>
            </thead>
            <tbody>\n`;
            task.forEach((res1)=>{
                result+=`<tr>
                <td>${res1.taskname}</td>
                <td>${res1.priority}</td>
                <td>${res1.category}</td>
                <td>${res1.day}/${res1.month}/${res1.year}</td>
                <td><button id="Task${i++}">Delete</button></td>
                </tr>`
            })
            result+=`</tbody>\n</table>`;
            document.getElementById("display").innerHTML=result;
        })
        j++;
    })
})

document.getElementById("Edit The Task").addEventListener('click',()=>{
        let result=`<table>
        <thead>
        <tr>
        <th>Task Name</th>
        <th>Priority</th>
        <th>Category</th>
        <th>Date</th>
        <th>Button</th>
        </tr>
        </thead>
        <tbody>\n`;
        let i=1;
    task.forEach((res)=>{
    result+=`<tr>
        <td class="c${i}">${res.taskname}</td>
        <td class="c${i}">${res.priority}</td>
        <td class="c${i}">${res.category}</td>
        <td class="c${i}">${res.day}/${res.month}/${res.year}</td>
        <td class="c${i}"><button id="Task${i++}">Edit</button></td>
        </tr>`
    })
    result+=`</tbody>\n</table>`;
    document.getElementById("display").innerHTML=result; 
    ////////////////////////////////////////
    let j=0;
    task.forEach((res)=>{
        let k=j;
        document.getElementById(`Task${k+1}`).addEventListener('click',()=>{
            let a=document.getElementsByClassName(`c${k+1}`);
            a[0].innerHTML=`<input id="input${k}"/>`
            document.getElementById(`input${k}`).value=task[k].taskname;
            let priority=`<select id="select${k}">
                            <option>${task[k].priority}</option>\n`
            priorityArray.forEach((res2)=>{
                if(res2!=task[k].priority){
                    priority+=`<option>${res2}</option>\n`;
                }
            })
            priority+=`</select>`
            a[1].innerHTML=priority;
            let category=`<select id=category${k}>
                            <option>${task[k].category}</option>`
            categoryArray.forEach((res3)=>{
                if(res3!=task[k].category){
                    category+=`<option>${res3}</option>`
                }
            })
            category+=`</select>`;
            a[2].innerHTML=category;
            a[3].innerHTML=`<input type="date" id="date${k}" name="date">`;

            document.getElementById(`date${k}`).value = new Date(`${task[k].year}-${task[k].month}-${task[k].day+1}`).toISOString().split('T')[0];
            // a[4].innerHTML="";
            a[4].innerHTML=`<button id="submit${k}">Don't Submit</button>`;
            ////////////////////////////////////////
            document.getElementById(`submit${k}`).addEventListener('mouseover',()=>{
                let taskname=document.getElementById(`input${k}`).value;
                let priority=document.getElementById(`select${k}`).value;
                let category=document.getElementById(`category${k}`).value;
                let date=document.getElementById(`date${k}`).value;
                if(taskname.length!=0 && priority.length!=0 && category.length!=0 && date.length!=0){
                    let day=new Date(date).getDate();
                    let month=new Date(date).getMonth()+1;
                    let year=new Date(date).getFullYear();
                    console.log(day,month,year);
                    let todayday=new Date().getDate();
                    let todaymonth=new Date().getMonth()+1;
                    let todayyear=new Date().getFullYear();
                    console.log(todayday,todaymonth,todayyear);
                    if(year==todayyear && month==todaymonth && day>=todayday){
                        document.getElementById(`submit${k}`).textContent="Submit";
                    }else if(year>todayyear){
                        document.getElementById(`submit${k}`).textContent="Submit";
                    }else if(year==todayyear && month>todaymonth){
                        document.getElementById(`submit${k}`).textContent="Submit";
                    }
                    else{
                        document.getElementById(`submit${k}`).textContent="Don't Submit";
                    }
                }else{
                    document.getElementById(`submit${k}`).textContent="Don't Submit";
                }
            })
            document.getElementById(`submit${k}`).addEventListener('click',()=>{
                if(document.getElementById(`submit${k}`).textContent=="Submit"){
                    task[k].taskname=document.getElementById(`input${k}`).value;
                    task[k].priority=document.getElementById(`select${k}`).value;
                    task[k].category=document.getElementById(`category${k}`).value;
                    task[k].day=new Date(document.getElementById(`date${k}`).value).getDate();
                    task[k].month=new Date(document.getElementById(`date${k}`).value).getMonth()+1;
                    task[k].year=new Date(document.getElementById(`date${k}`).value).getFullYear();
                    let result=`<table>
                    <thead>
                    <tr>
                    <th>Task Name</th>
                    <th>Priority</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Button</th>
                    </tr>
                    </thead>
                    <tbody>\n`;
                    let i=1;
                task.forEach((res)=>{
                result+=`<tr>
                    <td class="c${i}">${res.taskname}</td>
                    <td class="c${i}">${res.priority}</td>
                    <td class="c${i}">${res.category}</td>
                    <td class="c${i}">${res.day}/${res.month}/${res.year}</td>
                    <td class="c${i}"><button id="Task${i++}">Edit</button></td>
                    </tr>`
                })
                result+=`</tbody>\n</table>`;
                document.getElementById("display").innerHTML=result; 
                }
            })
        })
        j++;
    })
})
