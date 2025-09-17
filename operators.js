// Assignment Operator

var a = 10;
a = 89;

a = a + 3;
// a = a + 1;
// a -= 100;

// Increment Decrement Operators

// a += 1;
var res = a--;

// console.log(res, a);

// Equality Operators
var a = 10;
var b = "10";

// console.log(a !== b);

// Comparison Operators
var z = 10;
var x = 22;

// console.log(x >= z);

// Logical Operator
// AND - OR - NOT

// Falsy - 0, false, "", null, undefined, NaN
// Truty - " ", "29847328974", {}, [],

// AND - &&
// A  && B  = R
// T  | T  = true
// T  | F = false
// F  | T = false
// F  | F = false
// "Sayeed" && 24 = 24
// 0 && "Sayeed" = 0
// 0 && null = 0

// OR - ||
// A  ||  = R
// T  | T  = true
// T  | F = true
// F  | T = true
// F  | F = false
// "Sayeed" || 24 = "Sayeed"
// 0 || 24  = 24
// 0 || undefined = undefined

// NOT - !
// A - !A = R
// T - !T = F
// F - !F = T

// COntrol Flow

// if (0 && 24) {
//   console.log("Welcome!");
// } else if (true) {
//   console.log("Chota Welcome!");
// } else {
//   console.log("You are not Welcome!");
// }

var age = 17;
var isLicenseAvailable = false;

// if (age > 17 && isLicenseAvailable) {
//   console.log("Allowed to Drive on Charminar!");
// } else {
//   console.log("Galli mai chala lo!");
// }

// EMAIL VALIDATION USING STRING METHODS, OPERATORS AND IF ELSE STATEMENTS

var email = "sayeed @@gmail.com";
var isValidEmail = false;

// contains @
// must not start with @
// must not end with @ and .
// . come after @iamsayeeduddin
// no repetition of @
// . must not come right after @
// " " no empty spaces

if (!email.includes("@")) {
  console.log("Invalid Email address 1");
} else {
  if (email.startsWith("@")) {
    console.log("Invalid Email address 2");
  } else {
    if (email.endsWith("@") || email.endsWith(".")) {
      console.log("Invalid Email address 3");
    } else {
      if (email.indexOf("@") + 1 < email.indexOf(".") && email.indexOf("@") === email.lastIndexOf("@")) {
        console.log("Email Address is valid!");
      } else {
        console.log("Invalid Email Address! 4");
      }
    }
  }
}

// REGEX

// if (email.test(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)) {
//   console.log("Valid Email Address");
// } else {
//   console.log("Invalid Email");
// }
