// Spread Operator
let obj = {
  name: "Sayeed",
  className: "MERN",
  address: { primary: "Tolichowki", secondary: "Charminar" },
};
let obj2 = { ...obj };

obj2.address.primary = "Shaikpet";
obj2.name = "ahmed";
// console.log(obj, obj2);

// Rest Parameter
const add = (a, b = 0, ...rest) => {
  console.log(rest);
  if (rest.length) {
    let sum = a + b;
    rest.forEach((ele) => (sum += ele));
    return sum;
  }
  return a + b;
};

console.log(add(1));
