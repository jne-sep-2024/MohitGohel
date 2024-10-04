const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const bookSchema=new Schema({
    bookName: {
        type: String,
        required: true,
        unique: true,   // Book name is required
        trim: true        // Trims any extra spaces
    },
    bookAuthor: {
        type: String,
        required: true,   // Book author is required
        trim: true        // Trims any extra spaces
    },
    bookCategory: {
        type: String,
        required: true,   // Book category is required
        trim: true        // Trims any extra spaces
    }
});

module.exports=mongoose.model('Book',bookSchema);