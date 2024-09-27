const gettDb=require('../util/database.js').db;

module.exports=class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }

    save(){
        const db=gettDb();
        db.collection('user').insertOne({username:this.username,password:this.password});
        console.log('Data Added Successfully');
    }
    static fetchAll(){
        const db=gettDb();
        db.collection('user').find().toArray().then((user)=>{
            for(let i=0;i<user.length;i++){
                console.log(user[i]._id);
            }
        }).catch((err)=>{
            console.log("Error While Fetchcing Data");
            console.log(err);
        });
    }
}