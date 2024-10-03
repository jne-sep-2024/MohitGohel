const mongodb=require('mongodb');
const MongoDbClient=mongodb.MongoClient;

let _db;
const mongodbconnect=callback=>{
    MongoDbClient.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client=>{
        console.log("Connection SuccessFull");
        _db=client.db('user');
        callback();
    }).catch(err=>{
        console.log("Connection UnsuccessFull");
        console.log(err);
    });
};


const getDb=()=>{
    if(_db){
        return _db;
    }
    else{
        console.log("Error Thrown");
        throw new Error();
    }
}
exports.mongodbconnect=mongodbconnect;
exports.db=getDb;