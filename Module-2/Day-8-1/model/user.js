const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    firstname:{

    },
    lastname:{

    },
    username:{

    },
    password:{

    },
    arr:[]
});

module.exports=mongoose.model('User',userSchema);