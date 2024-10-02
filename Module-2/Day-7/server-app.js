const db=require('./util/databse');
let result1;

async function data(){
    await db.execute('select * from user').then(([[result]])=>{
        result1=result;
        console.log(result);
    }).catch(err=>{
        console.log(err);
    });
    console.log(result1);
}
data();