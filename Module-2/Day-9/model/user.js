const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const usreSchema=new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    bookCollection: [{
        type: Schema.Types.ObjectId,  // Array of ObjectIds
        ref: 'Book'                   // Reference to the 'Book' collection
    }]
});

module.exports=mongoose.model('User',usreSchema);