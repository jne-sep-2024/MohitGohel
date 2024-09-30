const getdb=require('../util/database').getdb;
async function editpath(req,res,next){
    const current=require('../model/user').current();
    const db=getdb();
    let resl=await db.collection('users').find({_id:current._id}).next().then(result=>{
        // console.log(result.arr);
        let result1=``;
        for(let i=0;i<result.arr.length;i++){
            result1+=`
                    <form action="/login/edit/${i}" method="POST">
                    <label>${result.arr[i].bookname}</label>
                    <input name="bookname" type="text"/><br>
                    <label>${result.arr[i].bookauthor}</label>
                    <input name="bookauthor" type="text"/><br>
                    <label>${result.arr[i].bookcategory}</label>
                    <input name="bookcategory" type="text"/><br>
                    <label>${result.arr[i].bookprice}</label>
                    <input name="bookprice" type="text"/><br>
                    <button>Edit</button><br></form>`
        }
        return result1;
    }).catch(err=>{
        console.log("error");
        console.log(err);
    });
    res.send(resl);
}

module.exports=editpath;