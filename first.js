console.log("My first nodejs");

let fname="Teppo";
console.log("Hello "+fname);
//let creates local variable
//var creates global variable
//const creates global variable, but you can not change the value
for(var x=1; x<5; x++){
    console.log("now the value is "+x);
}
console.log("After loop x is "+x);

function sayHello(fn){
    console.log("Hello "+fn);
}
sayHello("Lisa");