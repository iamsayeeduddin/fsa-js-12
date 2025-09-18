// Functions
function add(a, b) {
  if (false) {
    return a + b;
  }
  console.log("OJNLFSNLNDSNDSNDKJKNJ");
  console.log("OJNLFSNLNDSNDSNDKJKNJ");
  console.log("OJNLFSNLNDSNDSNDKJKNJ");
  console.log("OJNLFSNLNDSNDSNDKJKNJ");
  console.log("OJNLFSNLNDSNDSNDKJKNJ");
  console.log("OJNLFSNLNDSNDSNDKJKNJ");
  //   return undefined; Internally added by JS if return not executed bfore the end of function
}

var subtract = function (a, b) {
  return a - b;
};

// var x = add(1, 2); // 2
// var y = add(10, 2); // 12
// console.log(x, y);

// var z = subtract(20, 10);
// console.log(z);

function isValidEmail(email) {
  if (
    email.includes("@") &&
    !email.startsWith("@") &&
    !(email.endsWith("@") || email.endsWith(".")) &&
    email.indexOf("@") + 1 < email.indexOf(".") &&
    email.indexOf("@") === email.lastIndexOf("@") &&
    !email.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
}

let res = isValidEmail("sayeed@gmail.com.sa");
if (!res) {
  console.log("Invalid Email");
} else {
  console.log("Valid Email");
}
