fetch('http://192.168.10.134:3000/data').then(res=>{
    if(res){
        // console.log(res);
        res.json().then(result=>{
            console.log(result);
        }).catch(err=>{
            console.log("error while converting it into jason");
        });
    }
}).catch(err=>{
    console.log("Error while fetching data");
    console.log(err);
})