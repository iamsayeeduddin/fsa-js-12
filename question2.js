var arr = ["b", "c", "c", "d", "d", "e", "f", "f", "a", "a", "a", "b", "b"];
// {a: 3, b: 3, c: 2, d: 2, e: 1, f: 2}

var obj = arr.reduce((prev, curr) => {
  if (prev[curr]) {
    prev[curr] += 1;
  } else {
    prev[curr] = 1;
  }
  return prev;
}, {});

console.log(obj);
