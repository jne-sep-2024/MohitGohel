// const student={
//     roll:45,
//     fullName:"mohit",
//     marks: 92.2,
//     printmarks :function(){
//         return this.marks;
//     }
// };

// console.log(student.printmarks());


// const student={
//     id: 45,
//     name: "mohit gohel",
//     marks: 56.7,
//     setId :function(id){
//         this.id=id;
//     },
//     setName :function (name){
//         console.log("I am here");
//         this.name=name;
//     },
//     setMarks:function (marks){
//         this.marks=marks;
//     },

//     getId :function(){
//         return this.id;
//     },
//     getName :function(){
//         return this.name;
//     },
//     getMarks:function(){
//         return this.marks;
//     },
//     toString :function(){
//         return `id=${this.id}\nname=${this.name}\nmarks=${this.marks}`;
//     }
// };
// student["setName"]("mohit");
// console.log(student.getName());

// console.log(student.toString());
 

// const arr=[1,2,3,4,5];
// let s=arr.toString();
// console.log(s);

// const Employee={
//     id :45,
//     name :"mohit",
//     salary : 56000,

//     setId(id){
//         this.id=id;
//     },
//     setName(name){
//         this.name=name;
//     },
//     setSalary(salary){
//         this.salary=salary;
//     },

//     getId(){
//         return this.id;
//     },
//     getName(){
//         return this.name;
//     },
//     getSalary(){
//         return this.salary;
//     },
//     toString(){
//         return `id=${this.id}\nname=${this.name}\nsalary=${this.salary}`;
//     }
// };

// const SalesManager={
//     target :10,
//     setTarget(target){
//         this.target=target;
//     },
//     getTarget(){
//         return this.target;
//     },
//     toString(){
//         return `id=${this.id}\nname=${this.name}\nsalary=${this.salary}\ntarget=${this.target}`;
//     }
// };

// SalesManager.__proto__=Employee;

// console.log(SalesManager);

// SalesManager.setSalary(10000);
// console.log(SalesManager.toString());


// class Emp{
//     // id
//     // name
//     // salary

//     constructor(id,name,salary){
//         // console.log("i am here");
//         this.id=id;
//         this.name=name;
//         this.salary=salary;
//     }
// }

// let a=[];
// // let e=new Emp(45,"Mohit",67000);
// // let e1=new Emp(67,"bhinika",8900);
// // console.log(e);
// // console.log(e1);


// a.push(new Emp(45,"mohit gohel",45000));
// a.push(new Emp(67,"bhinika",56000));
// for(let i=0;i<a.length;i++){
//     console.log(a[i].id);
// }


// const Emp={
//     setId(id){
//         this.id=id;
//     },
//     getId(){
//         return this.id;
//     }
// };
// Emp.setId(100);
// console.log(Emp.id);


// class Emp{
//     constructor(id,name,salary){
//         this.id=id;
//         this.name=name;
//         this.salary=salary;
//     }
//     toString(){
//         return `${this.id} ${this.name} ${this.salary}`;
//     }
// }
// const e1=new Emp(65,"mohit",78000);
// console.log(e1.toString());

// class Emp{
//     constructor(id,name,salary){
//         this.id=id;
//         this.name=name;
//         this.salary=salary;
//     }
//     toString(){
//         return `${this.id} ${this.name} ${this.salary}`;
//     }
// }
// class SalesManager extends Emp{
//     constructor(id,name,salary,target){
//         super(id,name,salary);
//         this.target=target;
//     }
//     toString(){
//         return super.toString()+` ${this.target}`;
//     }
// }

// const s=new SalesManager(45,"mohit gohel",56000,45);
// console.log(s.toString());


// const emp={
    
//     setId(id){
//         this.id=id;
//     },
//     toString(){
//         return `${this.id}`;
//     }
// }
// emp.id=45;
// const sales={
//     setTarget(target){
//         this["target"]=target;
//     },
//     toString(){
//         return super.toString()+` ${this.target}`;
//     }
// }
// sales.__proto__=emp;
// sales.setTarget(56);
// console.log(sales.toString());


// class Emp{

//     constructor(){
//         this.id;
//         console.log("I am in Emp constructor");
//     }

// }
// class Sales extends Emp{
//     constructor(){
//         super();
//         this.target;
//         console.log("I am in Sales");
//     }
// }

// class Area extends Sales{
//     constructor(){
//         super();
//         this.name;
//         console.log("I am in Area");
//     }
// }

// let a=new Area();
// a.id=45;
// console.log(a.id);

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("name=",this.name);
        console.log("email=",this.email);
    }   
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(name,email){
        super.name=name;
        super.email=email;
    }
}

let a=new Admin("mohit","gohelmohit.2012@gmail.com");
a.viewData();