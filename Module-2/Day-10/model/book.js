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
        required: true,
      }
});

module.exports.Book=mongoose.model('Book',bookSchema);