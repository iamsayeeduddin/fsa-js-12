const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");

const addTask = () => {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task-item");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.innerText = taskText;

  const div = document.createElement("div");
  div.classList.add("task-actions");

  const btn1 = document.createElement("button");
  btn1.classList.add("edit");
  btn1.innerText = "Edit";

  const btn2 = document.createElement("button");
  btn2.classList.add("delete");
  btn2.innerText = "Delete";

  div.appendChild(btn1);
  div.appendChild(btn2);

  li.appendChild(span);
  li.appendChild(div);

  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
  updatePendingCount();
};

taskBtn.addEventListener("click", addTask);

taskList.addEventListener("click", (evt) => {
  const target = evt.target;
  const li = target.closest("li");

  if (target.classList.contains("delete")) {
    li.remove();
  }

  if (target.classList.contains("edit")) {
    const span = li.querySelector(".task-text");
    const newText = prompt("Edit your task", span.innerText);
    if (newText !== null && newText.trim() !== "") {
      span.innerText = newText;
    }
  }

  if (target.classList.contains("task-text")) {
    li.classList.toggle("completed");
  }
  updatePendingCount();
});

const filterTasks = (filterType) => {
  const allTasks = taskList.querySelectorAll("li");
  allTasks.forEach((task) => {
    switch (filterType) {
      case "all":
        task.style.display = "flex";
        break;
      case "pending":
        task.style.display = task.classList.contains("completed") ? "none" : "flex";
        break;
      case "completed":
        task.style.display = task.classList.contains("completed") ? "flex" : "none";
        break;
    }
  });
};

const updatePendingCount = () => {
  const pendingTasks = taskList.querySelectorAll("li:not(.completed)").length;
  const countEle = document.getElementById("taskCount");
  countEle.innerText = `${pendingTasks} Pending Tasks`;
};

filterBtns.forEach((ele) => {
  ele.addEventListener("click", () => {
    filterBtns.forEach((ele2) => ele2.classList.remove("active"));
    ele.classList.add("active");
    const filterType = ele.getAttribute("data-filter");
    filterTasks(filterType);
  });
});
