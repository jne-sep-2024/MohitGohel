const mongodb=require('mongodb');
const db=require('../util1/database1.js').db;
module.exports=class User{
    constructor(firstname,lastname,username,password){
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
        this.password=password;
    }   
    save(){
        const getDb=db();
        getDb.collection('reuser').insertOne({firstname:this.firstname,lastname:this.lastname,username:this.username,password:this.password}).then((result)=>{
            console.log("Successfully Added");
        }).catch(err=>{
            console.log("Some eror adding data");
            console.log(err);
        });

    }
    static async fetchAll(){
        const gettDb=db();
        return gettDb.collection('reuser').find().toArray().then((users)=>{
            return users;
        }).catch(err=>{
            return err;
        });
    }
    static async fetchSpecific(userid){
        const getDb=db();
        return getDb.collection('reuser').find({_id:new mongodb.ObjectId(userid)}).next().then((user)=>{
            return user;
        }).catch();
    }
}