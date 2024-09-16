
let emp={
    id: 56,
    name1:"mohit",
    salary : 89000
};

try{
    throw new Error("Some Error has occurred");
}catch(error){
    error.__proto__=emp;
    console.log(error.toString());
    console.log(error.id);
}