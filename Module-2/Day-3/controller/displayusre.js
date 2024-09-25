
const User=require('../model/user.js');
function displayuser(req,res,next){
    const user=new User(req.body.firstname,req.body.lastname,req.body.age);
    user.save();
    res.redirect('/adduser/display');
}

exports.display=displayuser;
exports.b=User.FetchAll();