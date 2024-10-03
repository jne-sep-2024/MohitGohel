const sequelize=require('./util/database3');
const user=require('./model/user1');
sequelize.sync().then(result=>{
    user.create({
        username:"omkarloka",
        passord:"12345"
    }).then(result=>{
        console.log("User added Successfully");
        user.findAll().then(result=>{
            console.log("result",result);
        }).catch(err=>{
            console.log(err);
        })
    });
}).catch(err=>{
    console.log(err);
});