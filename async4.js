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

const asyncFn = async () => {
  try {
    const addRes = await add(11, 20);
    const subRes = await subtract(addRes, 5);
    const mulRes = await multiply(subRes, 2);
    console.log(mulRes);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("I AM INEVITABLE!");
  }
};

// async function fn() {}

asyncFn();
