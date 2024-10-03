const getdb=require('../util/database').getdb;
async function deletepath(req,res,next){
    const current=require('../model/user').current();
    const db=getdb();
    let resl=await db.collection('users').find({_id:current._id}).next().then(result=>{
        // console.log(result.arr);
        let result1=`<table>
                    <thead>
                    <tr>
                    <th>Book Name</th>
                    <th>Book Author</th>
                    <th>Book Category</th>
                    <th>Book Price</th>
                    <th>Delete Button</th>
                    </tr>
                    <tbody>`;
        for(let i=0;i<result.arr.length;i++){
            result1+=`<tr>
                    <form action="/login/delete/${i}" method="POST">
                    <td>${result.arr[i].bookname}</td>
                    <td>${result.arr[i].bookauthor}</td>
                    <td>${result.arr[i].bookcategory}</td>
                    <td>${result.arr[i].bookprice}</td>
                    <td><button>Delete</button></td>
                    </tr>`
        }
        result1+=`</tbody></table>`;
        return result1;
    }).catch(err=>{
        console.log("error");
        console.log(err);
    });
    res.send(resl);
}

module.exports=deletepath;