const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      bookCollection: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book' 
      }]
});

module.exports.User=mongoose.model('User',userSchema);