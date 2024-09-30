const mongodb=require('mongodb');
const mongoclient=mongodb.MongoClient;

let _db;
const mongodbconnect=callback=>{
    mongoclient.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client=>{
        _db=client.db('bookscollection');
        callback();
        console.log("Connection Successfull");
    }).catch(err=>{
        console.log("Connection Unsuccessfull");
        console.log(err);
    });
}

const getdb=()=>{
    if(_db){
        return _db;
    }else{
        throw new Error("Some thing went wrong in sending _db");
    }
}

exports.getdb=getdb;
exports.mongodbconnect=mongodbconnect;