const mongoose=require('mongoose');

const schema=mongoose.Schema;

const BookSchema=new schema({
    arr:[
        {
          bookname: String,
          bookauthor: String
        }
    ]
});

module.exports=mongoose.model('Book',BookSchema);