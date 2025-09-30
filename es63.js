// Find && FindIndex
let books = [
  { id: 1, name: "The Great Gatsby", price: 1220 },
  { id: 2, name: "Motivational Moments", price: 800 },
  { id: 3, name: "Harry Potter", price: 1000 },
  { id: 4, name: "Tinkle Digest", price: 250 },
];

// let obj = books.findIndex((val) => val.id === 3);
let obj = books.find((val) => val.id === 3);
console.log(obj);

// module.exports = { obj: obj, books: books };
module.exports = { obj, books };
