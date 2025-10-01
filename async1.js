// SYNC - ASYNC JS
setTimeout(() => console.log("Inside setTimeout"), 1000);

var a = 10;
var b = a - 20;

console.log(a);

const print = () => console.log(b);

print();
