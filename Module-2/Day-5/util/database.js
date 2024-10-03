const mongodb=require('mongodb');
const MongodbClient=mongodb.MongoClient;

let _db;


const mongoconnect=callback=>{
    MongodbClient.connect('mongodb+srv://root:961336%40mM@cluster0.0ryq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then((client)=>{
        console.log("Connection SuccessFull");
        _db=client.db('user');
        callback();
    }).catch((err)=>{
        console.log("Connection UnSuccessFul");
        console.log(err);
    });
};

const getDb=()=>{
    if(_db){
        return _db;
    }
    throw err;
}

module.exports.mongoconnect=mongoconnect;
module.exports.db=getDb;