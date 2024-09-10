let student={
    id:45,
    studentName :"mohit",
    marks:56.7
};
console.log(student.id);
console.log(typeof student);
console.log(student["id"]);

student["id"]=student["id"]+1;
console.log(student);
