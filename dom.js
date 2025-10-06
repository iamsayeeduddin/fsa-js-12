// DOM - Document Object Model
// console.log(document);
const h1 = document.getElementsByTagName("h1");
const btn = document.getElementById("btn");
const body = document.getElementsByTagName("body")[0];
const acc = document.getElementById("accordion");

setTimeout(() => {
  h1[0].textContent = "Why DOM JS!";
}, 3000);

btn.addEventListener("click", () => {
  body.style.backgroundColor = "maroon";
  h1[0].style.color = "white";
});

h1[0].addEventListener("mouseenter", () => {
  h1[0].style.fontFamily = "cursive";
});

h1[0].addEventListener("mouseleave", () => {
  h1[0].style.fontFamily = "initial";
});

let arr = [
  {
    title: "How can I get help if I'm stuck on a challenge?",
    desc: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated help channel! If you haven't joined yet, you can get an invite to our Discord server here.",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    desc: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated help channel! If you haven't joined yet, you can get an invite to our Discord server here.",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    desc: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated help channel! If you haven't joined yet, you can get an invite to our Discord server here.",
  },
];
// background-color

arr.forEach((ele) => {
  const div = document.createElement("div");
  const h5 = document.createElement("h5");
  h5.innerText = ele.title;
  h5.classList.add("font-bold");
  div.addEventListener("click", () => {
    if (div.innerHTML.includes("<p>")) {
      div.removeChild(div.lastElementChild);
    } else {
      let p = document.createElement("p");
      p.innerText = ele.desc;
      div.appendChild(p);
    }
  });
  div.appendChild(h5);
  body.appendChild(div);
});
