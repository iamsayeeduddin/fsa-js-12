// Car Construnctor

function Car(brnd, model, yr) {
  this.brand = brnd;
  this.model = model;
  this.year = yr;
  this.getDetails = function () {
    return `${this.brand} ${this.model} (${this.year})`;
  };
  this.age = function () {
    return new Date().getFullYear() - this.year;
  };
}

var car1 = new Car("Tesla", "Model Y3", 2023);
var car2 = new Car("Mercedes", "AMG", 2015);
var car3 = new Car("Audi", "Q7", 2018);

console.log(car2.getDetails());
console.log(car2.age());
