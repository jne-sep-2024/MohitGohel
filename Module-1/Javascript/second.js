
var x=10;
function a(){
    console.log(x);
    // var x=100;
    // process.stdout.write(x);
    // console.log(b);
    var b=()=>{
        console.log(x);
    }

    b();
}
// function b(){
//     // var x=78;
//     console.log(x);
// }
a();
// console.log(x);