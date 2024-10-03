const mongoose=require('mongoose');
const app=require('express')();

const schema=mongoose.Schema;

const UserSchema=new schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const user=mongoose.model('User',UserSchema);

mongoose.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/mongoose?retryWrites=true&w=majority&appName=Cluster0')
.then(result=>{
    app.listen(3000);
    console.log("Connected Success");
    const users= new user({username:"mohitloka",password:"1234"});
    users.save();
}).catch(err=>{
    console.log("Error While Connection");
    console.log(err);
});