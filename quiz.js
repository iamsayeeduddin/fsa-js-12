const questions = [
  {
    question: "What does DOM stands for?",
    options: ["Document Object Middleware", "Document Object Model", "Desktop Oriented Module", "Desk Optical Mode"],
    answer: 1,
  },
  {
    question: "Which method selects a single elemnet by CSS Selector?",
    options: ["getElementById", "getElementsByTagName", "querySelector", "getElementsByClassName"],
    answer: 2,
  },
  {
    question: "Which event is fired when a button is clicked?",
    options: ["keyup", "mouseover", "keydown", "click"],
    answer: 3,
  },
];

const quizBox = document.getElementById("quizBox");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreBox = document.getElementById("scoreBox");
const scoreText = document.getElementById("score");
const totalText = document.getElementById("total");

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const current = questions[currentIndex];
  quizBox.innerHTML = `<h2>${current.question}</h2>
    ${current.options
      .map((option, idx) => `<div class="option" data-index="${idx}">${option}</div>`)
      .join()
      .replaceAll(",", "")}
  `;
  document.querySelectorAll(".option").forEach((opt) => opt.addEventListener("click", selectOption));
  totalText.innerText = questions.length;
}

const selectOption = (e) => {
  const selected = e.target;
  const selectedIndex = parseInt(selected.dataset.index);
  const correctIndex = questions[currentIndex].answer;

  if (selectedIndex === correctIndex) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("wrong");
    document.querySelector(`.option[data-index="${correctIndex}"]`).classList.add("correct");
  }

  document.querySelectorAll(".option").forEach((opt) => (opt.style.pointerEvents = "none"));
};

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});

const endQuiz = () => {
  quizBox.innerHTML = "";
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
  scoreBox.classList.remove("hidden");
  scoreText.innerText = score;
};

loadQuestion();
