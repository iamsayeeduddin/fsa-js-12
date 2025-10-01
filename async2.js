const add = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 2000);
};

const subtract = (a, b, cb) => {
  setTimeout(() => {
    cb(a - b);
  }, 1000);
};

const multiply = (a, b, cb) => {
  setTimeout(() => {
    cb(a * b, true);
  }, 2000);
};

const callBack = (res, bool) => {
  console.log(res);
  if (bool) console.timeEnd("ASYNC");
};

console.time("ASYNC");
add(1, 2, (addRes) => {
  console.log(addRes);
  subtract(20, addRes, (subRes) => {
    console.log(subRes);
    multiply(subRes, 2, callBack);
  });
});

// new Promise();
