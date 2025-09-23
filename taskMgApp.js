const taskNameInput = document.getElementById("taskName");
const taskCategoryInput = document.getElementById("taskCategory");
const taskDateInput = document.getElementById("taskDate");
const taskStatusInput = document.getElementById("taskStatus");
const addTaskButton = document.getElementById("addTaskButton");

const taskBody = document.getElementById("taskBody");

const filterItem = document.getElementById("filter-name");
const filterBtn = document.getElementById("filter-btn");
const clearFilterBtn = document.getElementById("clear-filter-btn");

const MS_PER_DAY = 24*60*60*1000;
const GRACE_DAYS = 0; // set to 2,3… if you want extra days before “Overdue”

let tasks = [];

// ---------- MIDNIGHT helpers ----------
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
// render (optionally takes a list)

function displayTasks(list = tasks) {
  taskBody.innerHTML = "";
  const today = startOfDay(new Date());

  list.forEach((task) => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = task.nameT;
    tr.appendChild(tdName);

    const tdCat = document.createElement("td");
    tdCat.textContent = task.categoryT;
    tr.appendChild(tdCat);

    const tdDate = document.createElement("td");
    tdDate.textContent = task.date;
    tr.appendChild(tdDate);

    const deadline = startOfDay(task.date);
    const displayStatus =
      !isNaN(deadline) && task.statusT !== "completed" && deadline < today
        ? "overdue"
        : task.statusT;

    const tdStatus = document.createElement("td");
    tdStatus.textContent = displayStatus;
    tr.appendChild(tdStatus);

    taskBody.appendChild(tr);
  });
}
// add task (one place)
function addTask() {
  const nameT = taskNameInput.value.trim();
  const categoryT = taskCategoryInput.value.trim();
  const date = taskDateInput.value;
  const statusT = taskStatusInput.value;
  console.log(nameT, categoryT, date, statusT);
  if (!nameT || !categoryT || !date || !statusT) {
    alert("Please fill in all fields before adding a task.");
    return;
  }
   tasks.push({ nameT, categoryT, date, statusT });     // create an object (group together parts of tasks to make a whole task
   console.log("tasks array after push: adding one element to general", tasks);
  // clear inputs AFTER adding
  taskNameInput.value = "";
  taskCategoryInput.value = "";
  taskDateInput.value = "";
  taskStatusInput.value = "not started";

  displayTasks();
}

addTaskButton.addEventListener("click", addTask);
function filterItems(term) {
  const t = term.trim().toLowerCase();
  if (!t) {
    displayTasks(tasks);
    return;
  }

  const filtered = tasks.filter((item) =>
    [item.nameT, item.categoryT, item.statusT]
      .join(" ")
      .toLowerCase()
      .includes(t)
  );
    console.log("In filterterm: "+term);   
    displayTasks(filtered);
}
filterBtn.addEventListener('click', () => filterItems(filterItem.value));
clearFilterBtn.addEventListener('click', () => { filterItem.value = ''; displayTasks(tasks); });

displayTasks(); // initial display
// Each task should be stored as an object with properties such as task name, category, deadline, and status.

