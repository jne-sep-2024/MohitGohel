const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const bookSchema=new Schema({
    bookName: {
      type: String,
      required: true,
      unique: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    bookCategory: {
      type: String,
    },
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]

});

module.exports=mongoose.model('Book',bookSchema);