


global.a=90;
b();

function b(){
    console.log(this.a);
}
console.log(global.a);