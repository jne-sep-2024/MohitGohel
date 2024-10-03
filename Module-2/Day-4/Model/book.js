module.exports=class Book{
    constructor(bookName,bookAuthor,bookCategory){
        this.bookName=bookName;
        this.bookAuthor=bookAuthor;
        this.bookCategory=bookCategory;
    }
    save(){
        try{
            let map=JSON.parse(require('fs').readFileSync(require('path').join(__dirname,'../','data','book.txt'),'utf8'));
            map=new Map(map);
            const userArray=require('../controller/validate').username;
            console.log('userArray=',userArray,userArray.length);
            const book=map.get(userArray[userArray.length-1].username);
            if(book!==undefined){
                book.push({bookName:this.bookName,bookAuthor:this.bookAuthor,bookCategory:this.bookCategory});
                map.set(userArray[userArray.length-1].username,book);
                require('fs').writeFileSync(require('path').join(__dirname,'../','data','book.txt'),JSON.stringify(Array.from(map)),'utf8');
            }else{
                const arr=[];
                arr.push({bookName:this.bookName,bookAuthor:this.bookAuthor,bookCategory:this.bookCategory});
                map.set(userArray[userArray.length-1].username,arr);
                require('fs').writeFileSync(require('path').join(__dirname,'../','data','book.txt'),JSON.stringify(Array.from(map)),'utf8');
            }
        }catch(err){
            console.log(err);
            const map=new Map();
            console.log(this);
            const arr=[];
            const userArray=require('../controller/validate').username;
            arr.push({bookName:this.bookName,bookAuthor:this.bookAuthor,bookCategory:this.bookCategory});
            map.set(require('../controller/validate').username[userArray.length-1].username,arr);
            console.log(map);
            require('fs').writeFileSync(require('path').join(__dirname,'../','data','book.txt'),JSON.stringify(Array.from(map)),'utf8');
        }
    }
    static fetchAll(){
        try{
            let map=JSON.parse(require('fs').readFileSync(require('path').join(__dirname,'../','data','book.txt'),'utf8'));
            map=new Map(map);
            return map;
        }catch(err){
            return new Map();
        }
    }
}