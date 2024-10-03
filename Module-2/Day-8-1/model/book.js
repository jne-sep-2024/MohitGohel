const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Bookschema=new Schema({
            bookname:{

            },
            bookauthor:{

            }
});

module.exports=mongoose.model('Book',Bookschema);