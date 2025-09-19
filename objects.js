// Objects - Real World Entity
var name1 = "Abdul Rafay";
var phone1 = 98741563210;
var address1 = "Tolichowki, Hyderabad";
var profilePic1 = "https://.......";
var emails1 = ["rafay@work.com", "arafay@gmail.com"];

var contact1 = {
  "full name": "Abdul Rafay",
  phone: 9874563210,
  address: "Tolichowki, Hyderabad",
  profilePic1: "https://......",
  email: ["rafay@work.com", "arafay@gmail.com"],
  call: function () {
    console.log("Calling Abdul Rafay!");
  },
};

console.log("Welcome " + contact1["full name"]);
