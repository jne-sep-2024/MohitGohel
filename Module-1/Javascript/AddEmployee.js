class Employee{
    constructor(id,name,salary,type){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.type=type;
    }
    toString(){
        return `<tr><td>${this.id}</td>
                <td>${this.name}</td>
                <td>${this.salary}</td>`;
    }
}
class Admin extends Employee{
    constructor(id,name,salary,type,allowance){
        super(id,name,salary,type);
        this.allowance=allowance;
        this.eString=``;
    }
    toString(){
        return super.toString()+`<td>${this.allowance}</td>`;
    }
}
class SalesManager extends Employee{
    constructor(id,name,salary,type,target,incentive){
        super(id,name,salary,type);
        this.target=target;
        this.incentive=incentive;
        this.eString=``;
    }
    toString(){
        return super.toString()+`<td>${this.target}</td><td>${this.incentive}</td>`;
    }
}
class AreaSalesManager extends SalesManager{
    constructor(id,name,salary,type,target,incentive,areaName){
        super(id,name,salary,type,target,incentive);
        this.areaName=areaName;
        this.eString=``;
    }
    toString(){
        return super.toString()+`<td>${this.areaName}</td>`;
    }
}
let employeeArray=JSON.parse(localStorage.getItem('EmpArray'));
let emp_id=101;
if(employeeArray.length!=0){
    emp_id=employeeArray[employeeArray.length-1].id+1;
}
document.getElementById("sales").addEventListener('click',()=>{
    let result=employee()+incentiveTarget()+submitButton();
    document.getElementById("display").innerHTML=result;
    document.getElementById("submit").addEventListener('click',()=>{
        employeeArray.push(new SalesManager(emp_id,returnNameandSalary()[0],returnNameandSalary()[1],"SalesManager",document.getElementById("target").value,document.getElementById("incetive").value));
        employeeArray[employeeArray.length-1].eString=`<tr><td>${emp_id++}</td><td>${returnNameandSalary()[0]}</td><td>${returnNameandSalary()[1]}</td><td>${document.getElementById("target").value}</td><td>${document.getElementById("incetive").value}</td>`;
        localStorage.setItem('EmpArray',JSON.stringify(employeeArray));
        console.log(employeeArray);
    });
});
document.getElementById('displayemp').addEventListener('click',()=>{
    let sales=displayEmp()+`<th>Target</th><th>Incentive</th>`+theadTbody();
    let area=displayEmp()+`<th>Target</th><th>Incentive</th><th>Area Name</th>`+theadTbody();
    let admin=displayEmp()+`<th>Allowance</th>`+theadTbody();
    let disSales=``;
    let areaSales=``;
    let disadmin=``;
    for(let i=0;i<employeeArray.length;i++){
        if(employeeArray[i].type=="SalesManager")
            disSales+=employeeArray[i].eString+`</tr>`;
        else if(employeeArray[i].type=="AreaSalesManager")
            areaSales+=employeeArray[i].eString+`</tr>`;
        else if(employeeArray[i].type=="Admin"){
            disadmin+=employeeArray[i].eString+`</tr>`;
        }
    }
    document.getElementById("salesdisplay").innerHTML=sales+disSales+closeTbodyTable();
    document.getElementById("Areadisplay").innerHTML=area+areaSales+closeTbodyTable();
    document.getElementById("AdminDisplay").innerHTML=admin+disadmin+closeTbodyTable();
})
document.getElementById('area').addEventListener('click',()=>{
    let result=employee()+incentiveTarget()+`<br><label>Area Name</label><input id="areaname">`+submitButton();
    document.getElementById("display").innerHTML=result;
    document.getElementById("submit").addEventListener('click',()=>{
        employeeArray.push(new AreaSalesManager(emp_id,returnNameandSalary()[0],returnNameandSalary()[1],"AreaSalesManager",document.getElementById("target").value,document.getElementById("incetive").value,document.getElementById("areaname").value));
        employeeArray[employeeArray.length-1].eString=`<tr><td>${emp_id++}</td><td>${returnNameandSalary()[0]}</td><td>${returnNameandSalary()[1]}</td><td>${document.getElementById("target").value}</td><td>${document.getElementById("incetive").value}</td><td>${document.getElementById("areaname").value}</td>`;
        localStorage.setItem('EmpArray',JSON.stringify(employeeArray));
        console.log(employeeArray);
    });    
})
document.getElementById("admin").addEventListener('click',()=>{
    let result=employee()+`<br><label>Allowance</label><input id="allowance"/>`+submitButton();
    document.getElementById("display").innerHTML=result;
    document.getElementById("submit").addEventListener('click',()=>{
        employeeArray.push(new Admin(emp_id,returnNameandSalary()[0],returnNameandSalary()[1],"Admin",document.getElementById("allowance").value));
        employeeArray[employeeArray.length-1].eString=`<tr><td>${emp_id++}</td><td>${returnNameandSalary()[0]}</td><td>${returnNameandSalary()[1]}<td>${document.getElementById("allowance").value}</td>`;
        localStorage.setItem('EmpArray',JSON.stringify(employeeArray));
        console.log(employeeArray);
    });    
})
document.getElementById('Delete').addEventListener('click',()=>{
    location.href="DeleteEmp.html";
})

function employee(){
    let result=`<label>Enter name:-</label>
                <input id="empname"/><br>
                <label>Enter Salary:-</label>
                <input id="salary"/>`
    return result;
}
function submitButton(){
    return `<br><button id="submit">Submit</button>`;
}
function returnNameandSalary(){
    return [document.getElementById("empname").value,document.getElementById("salary").value]; 
}
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
function closeTbodyTable(){
    return `</tbody></table>`;
}
function incentiveTarget(){
    return `<br><label>Target:-</label><input id="target"/><br><label>Incentive:-</label><input id="incetive"><br>`;
}
function button(){
    return `<th>Button</th>`;
}
function callAgain(){
    let sales=displayEmp()+`<th>Target</th><th>Incentive</th>`+button()+theadTbody();
    let area=displayEmp()+`<th>Target</th><th>Incentive</th><th>Area Name</th>`+button()+theadTbody();
    let admin=displayEmp()+`<th>Allowance</th>`+button()+theadTbody();
    let disSales=``;
    let areaSales=``;
    let disadmin=``;
    for(let i=0;i<employeeArray.length;i++){
        if(employeeArray[i] instanceof SalesManager){
            if(employeeArray[i] instanceof AreaSalesManager)
                areaSales+=employeeArray[i].toString()+`<td><button id="button${i}">Delete<td></tr>`;
            else
                disSales+=employeeArray[i].toString()+`<td><button id="button${i}">Delete<td></tr>`;
        }else if(employeeArray[i] instanceof Admin){
            disadmin+=employeeArray[i].toString()+`<td><button id="button${i}">Delete<td></tr>`;
        }
    }
    document.getElementById("salesdisplay").innerHTML=sales+disSales+closeTbodyTable();
    document.getElementById("Areadisplay").innerHTML=area+areaSales+closeTbodyTable();
    document.getElementById("AdminDisplay").innerHTML=admin+disadmin+closeTbodyTable();
}
document.getElementById("Edit").addEventListener('click',()=>{
    location.href="EditEmp.html";
})