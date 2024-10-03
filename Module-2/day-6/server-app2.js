const mongoose=require('mongoose');
const app=require('express')();
mongoose.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(result=>{
    app.listen(3000);
    console.log("connection successfull");
}).catch(err=>{
    console.log("some error has occurred while connecting databse");
});