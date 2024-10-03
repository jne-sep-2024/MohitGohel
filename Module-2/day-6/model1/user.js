
const getdb=require('../server-app1').getdb;
let currentuser;
module.exports.User=class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }

    async save(){
        const db=getdb();
        await db.collection('books').insertOne({arr:[]});
        const result=await db.collection('books').find().toArray().then(result=>{
            return result;
        }).catch(err=>{
            console.log("Error while fetching book data");
        });
        await db.collection('users').insertOne({username:this.username,password:this.password,book_id:result[result.length-1]._id});
    }
    static async validate(username,password){
        const db=getdb();
        currentuser=undefined;
        currentuser=await db.collection('users').findOne({username:username,password:password});
    }
}

const current=()=>{
        return currentuser;
}

module.exports.current=current;