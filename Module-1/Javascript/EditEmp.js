
let employeeArray=JSON.parse(localStorage.getItem('EmpArray'));
console.log(employeeArray);
function callAgain(){
    let sales=displayEmp()+`<th>Target</th><th>Incentive</th>`+button()+theadTbody();
    let area=displayEmp()+`<th>Target</th><th>Incentive</th><th>Area Name</th>`+button()+theadTbody();
    let admin=displayEmp()+`<th>Allowance</th>`+button()+theadTbody();
    let disSales=``;
    let areaSales=``;
    let disadmin=``;
    for(let i=0;i<employeeArray.length;i++){
        if(employeeArray[i].type=="SalesManager")
            disSales+=employeeArray[i].eString+`<td><button id="Edit${i}">Edit<td></tr>`;
        else if(employeeArray[i].type=="AreaSalesManager")
            areaSales+=`<tr><td>${employeeArray[i].id}</td><td>${employeeArray[i].name}</td><td>${employeeArray[i].salary}</td><td>${employeeArray[i].incentive}</td><td>${employeeArray[i].target}</td><td>${employeeArray[i].areaName}</td>`+`<td><button id="Edit${i}">Edit<td></tr>`;
        else if(employeeArray[i].type=="Admin"){
            disadmin+=employeeArray[i].eString+`<td><button id="Edit${i}">Edit<td></tr>`;
        }
    }
    document.getElementById("salesdisplay").innerHTML=sales+disSales+closeTbodyTable();
    document.getElementById("Areadisplay").innerHTML=area+areaSales+closeTbodyTable();
    document.getElementById("AdminDisplay").innerHTML=admin+disadmin+closeTbodyTable();
    for(let j=0;j<employeeArray.length;j++){
        document.getElementById(`Edit${j}`).addEventListener('click',()=>{
            let result=`<label>${employeeArray[j].id}</label><br>
                        <label>Name:-</label><input id="changename${j}"/><br>
                        <label>Salary:-</label><input id="changesalary${j}"/>`;
            if(employeeArray[j].type=="SalesManager"){
                result+=`<br><label>target</label><input id="target${j}"/><br><label>Incentive:-</label><input id="incentive${j}"/><br><button id="submit${j}">Submit</button>`;
                document.getElementById("EditEmp").innerHTML=result;
            }
            else if(employeeArray[j].type=="AreaSalesManager"){
                result+=`<br><label>target</label><input id="target${j}"/><br><label>Incentive:-</label><input id="incentive${j}"/><br><label>Area Name</label><input id="area${j}"/><br><button id="submit${j}">Submit</button>`
                document.getElementById("EditEmp").innerHTML=result;
                document.getElementById(`changename${j}`).value=employeeArray[j].name;
                document.getElementById(`changesalary${j}`).value=employeeArray[j].salary;
                document.getElementById(`target${j}`).value=employeeArray[j].target;
                document.getElementById(`incentive${j}`).value=employeeArray[j].incentive;
                document.getElementById(`area${j}`).value=employeeArray[j].areaName;
                document.getElementById(`submit${j}`).addEventListener('click',()=>{
                    employeeArray[j].name=document.getElementById(`changename${j}`).value;
                    employeeArray[j].salary=document.getElementById(`changesalary${j}`).value;
                    employeeArray[j].target=document.getElementById(`target${j}`).value;
                    employeeArray[j].incentive=document.getElementById(`incentive${j}`).value;
                    employeeArray[j].areaName=document.getElementById(`area${j}`).value;
                    localStorage.setItem('EmpArray',JSON.stringify(employeeArray));
                    location.href="EditEmp.html";
                })
            }
            else if(employeeArray[j].type=="Admin"){
                result+=`<br><label>Allowance:-</label><input id="Allowance${j}"/><br><button id="submit${j}">Submit</button>`;
                document.getElementById("EditEmp").innerHTML=result;

            }
        });
    }
}
callAgain();
function displayEmp(){
    return `<table>
            <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>`
}
function theadTbody(){
    return `</tbody></thead><tbody>`;
}
function button(){
    return `<th>Edit</th>`;
}
function closeTbodyTable(){
    return `</tbody></table>`;
}