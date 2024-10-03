
const getdb=require('../util/database').getdb;
module.exports=class Book{
    constructor(bookname,bookauthor,bookcategory,bookprice){
        this.bookname=bookname;
        this.bookauthor=bookauthor;
        this.bookcategory=bookcategory;
        this.bookprice=bookprice;
    }

    save(){
        const db=getdb();
        const current=require('./user').current();
        console.log(current);
        const arr=current.arr;
        arr.push({bookname:this.bookname,bookauthor:this.bookauthor,bookcategory:this.bookcategory,bookprice:this.bookprice});
        db.collection('users').updateOne({_id:current._id},{$set:{arr:arr}});
    }

    static async getBook(){
        const current=require('./user').current();
        const db=getdb();
        return db.collection('users').find({_id:current._id}).next().then(result=>{
            // console.log(result.arr);
            let result1=`<table>
                        <thead>
                        <tr>
                        <th>Book Name</th>
                        <th>Book Author</th>
                        <th>Book Category</th>
                        <th>Book Price</th>
                        </tr>
                        <tbody>`
            for(let i=0;i<result.arr.length;i++){
                result1+=`<tr>
                        <td>${result.arr[i].bookname}</td>
                        <td>${result.arr[i].bookauthor}</td>
                        <td>${result.arr[i].bookcategory}</td>
                        <td>${result.arr[i].bookprice}</td>
                        </tr>`
            }
            result1+=`</tbody></table>`;
            return result1;
        }).catch(err=>{
            console.log("error");
            console.log(err);
        })
    }

    static async deleteBook(bookindex){
        const db=getdb();
        const current=require('./user').current();
        const arr=current.arr;
        arr.splice(bookindex,1);
        await db.collection('users').updateOne({_id:current._id},{$set:{arr:arr}});
    }

    static async editit(bookname,bookauthor,bookcategory,bookprice,id){
        const db=getdb();
        const current=require('../model/user').current();
        const arr=await db.collection('users').find({_id:current._id}).next().then(result=>{
            const arr=result.arr;
            if(bookname.length!=0){
                arr[id].bookname=bookname;
            }
            if(bookauthor.length!=0){
                arr[id].bookauthor=bookauthor;
            }
            if(bookcategory.length!=0){
                arr[id].bookcategory=bookcategory;
            }
            if(bookprice.length!=0){
                arr[id].bookprice=bookprice;
            }
            return arr;
        }).catch(err=>{
            console.log("Error while updating");
            console.log(err);
        });
        await db.collection('users').updateOne({_id:current._id},{$set:{arr:arr}});
    }
}