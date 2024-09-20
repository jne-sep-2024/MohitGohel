
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
            disSales+=employeeArray[i].eString+`<td><button id="button${i}">Delete<td></tr>`;
        else if(employeeArray[i].type=="AreaSalesManager")
            areaSales+=employeeArray[i].eString+`<td><button id="button${i}">Delete<td></tr>`;
        else if(employeeArray[i].type=="Admin"){
            disadmin+=employeeArray[i].eString+`<td><button id="button${i}">Delete<td></tr>`;
        }
    }
    document.getElementById("salesdisplay").innerHTML=sales+disSales+closeTbodyTable();
    document.getElementById("Areadisplay").innerHTML=area+areaSales+closeTbodyTable();
    document.getElementById("AdminDisplay").innerHTML=admin+disadmin+closeTbodyTable();
    for(let j=0;j<employeeArray.length;j++){
        document.getElementById(`button${j}`).addEventListener('click',()=>{
            employeeArray.splice(j,1);
            localStorage.setItem('EmpArray',JSON.stringify(employeeArray));
            location.href="DeleteEmp.html";
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
    return `<th>Button</th>`;
}
function closeTbodyTable(){
    return `</tbody></table>`;
}