function Student(nm, crs, time, isActive, contact, score) {
  this.name = nm;
  this.course = crs;
  this.time = time;
  this.isActive = isActive;
  this.contact = contact;
  this.score = score;
  this.test = function () {
    console.log("Testing");
  };
}

var std1 = new Student("Sayeeduddin", "MERN", "7.30", true, [9874563210], 5);
var std2 = new Student("Badar", "Azure", "9.30", false, [963587410], 5);

std2.name = "Aleem Khan";
// console.log(std1, std2);

Student.prototype.call = function () {
  console.log(`Calling ${this.name}`);
};

console.log(std1);
// std1.call();
