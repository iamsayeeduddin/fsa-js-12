// Class - Different Way of Defining a Structure of an object

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
      return `${this.title} by ${this.author}, published in ${this.year}.`;
    };
  }

  // if released before 10 years return true
  isOld() {
    // if (new Date().getFullYear() - this.year > 10) {
    //   return true;
    // } else {
    //   return false;
    // }
    // return new Date().getFullYear() - this.year > 10 ? false : true;
    // return !(new Date().getFullYear() - this.year > 10);
    return new Date().getFullYear() - this.year > 10;
  }
}

const book1 = new Book("JS", "Sayeeduddin", 2023);
console.log(book1.isOld());

// Inheritance
class Mobile {
  constructor(brand, model, camera, releaseDate) {
    this.brand = brand;
    this.model = model;
    this.camera = camera;
    this.releaseDate = releaseDate;
  }

  call(name) {
    console.log(`Calling ${name}!`);
  }
}

class Smartphone extends Mobile {
  constructor(is5G, wifi, memory, storage, brand, model, camera, releaseDate) {
    super(brand, model, camera, releaseDate);
    this.is5G = is5G;
    this.wifi = wifi;
    this.memory = memory;
    this.storage = storage;
  }

  videoCall(name) {
    console.log(`Video Calling ${name}`);
  }

  call() {
    console.log("Overriden Method!");
  }
}

var sm1 = new Smartphone(true, true, "16GB", "256GB", "Apple", "IPhone 15", "64MP", 2023);
console.log(sm1.call("Sayeeduddin"));
// sm1.videoCall("Ahmed");

var m1 = new Mobile("Nokia", "N95", "8MP", 2002);

console.log(m1.call("Sayeeduddin"));
