var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Map
// var arr2 = arr.map((itm) => {
//   return itm * 2;
// });

// Filter
// var arr2 = arr.filter((ele, idx) => ele % 2 !== 0);

// Reduce

var reduceFn = (prev, curr) => prev + curr;

var sum = arr.reduce(reduceFn, 0);

console.log(sum);
