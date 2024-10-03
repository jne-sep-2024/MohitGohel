// const user=[];
const path=require('path');
const filesystem=require('fs');
module.exports=class User{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    save(){
        try{
            filesystem.readFileSync(path.join(require('../util1/path1'),'data','user.txt',),'utf8');
            const b=JSON.parse(filesystem.readFileSync(path.join(require('../util1/path1'),'data','user.txt',),'utf8'));
            b.push(this);
            filesystem.writeFileSync(path.join(require('../util1/path1'),'data','user.txt'),JSON.stringify(b),'utf8');
        }catch(err){
            console.log("I am here");
            b.push(this);
            filesystem.writeFileSync(path.join(require('../util1/path1'),'data','user.txt'),JSON.stringify(b),'utf8');
        }
        // user.push(this);
    }

    static FetchAll(){
        return JSON.parse(filesystem.readFileSync(path.join(require('../util1/path1'),'data','user.txt'),'utf8'));
    }
}