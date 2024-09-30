

const getdb=require('../util/database.js').getdb;
let currentuser;
module.exports.user=class User{
    constructor(firstname,lastname,email,username,password){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.username=username;
        this.password=password;
        this.arr=[];
    }


    save(){
        const db=getdb();
        db.collection('users').insertOne({firstname:this.firstname,lastname:this.lastname,email:this.email,username:this.username,password:this.password,arr:this.arr})
        .then(result=>{
            console.log("Added Successfully");
        }).catch(err=>{
            console.log("Unable to add user something went worng");
            console.log(err);
        });
    }

    static async checkuser(username,password){
        currentuser=undefined;
        const db=getdb();
        await db.collection('users').find().toArray().then((result)=>{
            for(let i=0;i<result.length;i++){
                if(result[i].username==username && result[i].password==password){
                    console.log(result[i]);
                    currentuser=result[i];
                    break;
                }
            }
        }).catch(err=>{
            console.log("some error has occurred");
            console.log(err);
        });
    }
}

const current=()=>{
    return currentuser;
}

exports.current=current;