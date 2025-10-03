const add = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (a === 10) res(a + b);
      else rej("Value 10 not allowed in param a");
    }, 2000);
  });
};

const subtract = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (a === 20) {
        rej("Invalid Input");
        return;
      }
      res(a - b);
    }, 1000);
  });
};

const multiply = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a * b);
    }, 2000);
  });
};

// console.log(add(10, 20));
// add(10, 20)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("I am executed at the end of each promise"));

// subtract(30, 20)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// multiply(20, 20)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// add(10, 20)
//   .then((addRes) => subtract(addRes, 5))
//   .then((subRes) => multiply(subRes, 2))
//   .then((mulRes) => console.log(mulRes))
//   .catch((err) => console.log(err));

// Promise.all([add(11, 20), subtract(10, 5), multiply(10, 2)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

Promise.any([add(11, 20), subtract(10, 5), multiply(10, 2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
