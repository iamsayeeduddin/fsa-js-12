// EcmaScript 6 (2015)

// var & let & const

let b = 20;

// function call() {
//   var a = 10;
//   //   console.log(a, b);
// }

// call();
if (true) {
  //   console.log(a, b);
}
// console.log(a, b);

const a = 10;
// a = 12;

const arr = [1, 2, 4, 4, 5, 5, 5, 6];
arr[0] = 100;
arr.push(200);
// console.log(arr);

const call = (a, b) => a + b;

const res = call(1, 2);
// console.log(res);

// Object & Array Destructuring

let obj = {
  name: "Sayeed",
  className: "MERN",
  address: {},
};

// var name = obj.name;
// var className = obj.className;
let { className } = obj;
let {} = obj.address;
// console.log(className);

var arrr = [1, 2, 3, 4];
var [aA, bB, c, d] = arrr;
console.log(aA, bB, c, d);
