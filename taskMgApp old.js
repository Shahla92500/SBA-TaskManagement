const taskNameInput = document.getElementById("taskName");
const taskCategoryInput = document.getElementById("taskCategory");
const taskDateInput = document.getElementById("taskDate");
const taskStatusInput = document.getElementById("taskStatus");
const addTaskButton = document.getElementById("addTaskButton");
const taskBody = document.getElementById("taskBody");

const filterItem = document.getElementById("filter-name");
const filterBtn = document.getElementById("filter-btn");

const MS_PER_DAY = 24*60*60*1000;
const GRACE_DAYS = 0; // set to 2,3… if you want extra days before “Overdue”

let tasks = [];

const today    = startOfDay(new Date());
console.log(taskNameInput);
console.log(taskCategoryInput);
console.log(taskDateInput);
console.log(taskStatusInput);

function addTask() {
    // nameT = taskNameInput.value;
    // categoryT = taskCategoryInput.value;
    // date = taskDateInput.value;
    // statusT = taskStatusInput.value;
    // console.log(nameT, categoryT, date, statusT);

    // if (!nameT || !categoryT || !date || !statusT) {
    //     alert("Please fill in all fields before adding a task.");
    //     return;
    // }
    // create newTask object (group together parts of task to make a whole task
    // const newTask = {
    // nameT,
    // categoryT,
    // date,
    // statusT
    // };
    // console.log("newTask each line of task, one object of task, one element per each array", newTask);
    // // Push task(newTask) object into tasks array
    // tasks.push(newTask);

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
// take the addTask function and attach it to the button
// addTaskButton.addEventListener("click", addTask);

// clear out the inputs after adding a task for next use
nameT = taskNameInput.value="";
categoryT = taskCategoryInput.value="";
date = taskDateInput.value="";
statusT = taskStatusInput.value="not started";
console.log(nameT, categoryT, date, statusT);
// create fuction to display tasks
// ---------- helpers ----------
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
// render (optionally takes a list)
function displayTasks(list = tasks) {
  taskBody.innerHTML = "";
  list.forEach((task) => {     //  this loop will display each task list
    const tRow = document.createElement("tr"); // create a row for each task

    const nameTData = document.createElement("td");
    nameTData.textContent = task.nameT;
    tRow.appendChild(nameTData);

    const categoryTData = document.createElement("td");
    categoryTData.textContent = task.categoryT;
    tRow.appendChild(categoryTData);

    const dateTData = document.createElement("td");
    dateTData.textContent = task.date;
    tRow.appendChild(dateTData);

    const deadline = startOfDay(task.date);
    const today = startOfDay(new Date());
    const displayStatus =
      !isNaN(deadline) && task.statusT !== "completed" && deadline < today
        ? "overdue"
        : task.statusT;

    const statusTData = document.createElement("td");
    statusTData.textContent = displayStatus;
    tRow.appendChild(statusTData);
    console.log("overdue check       " + displayStatus);
    taskBody.appendChild(tRow);
  });
}
// function displayTasks() {
    // taskBody.innerHTML = "";
    // tasks.forEach((task) => {        
    //    const tRow = document.createElement("tr");
    //     const nameTData = document.createElement("td");
    //     nameTData.textContent = task.nameT;
    //     tRow.appendChild(nameTData);
        // const categoryTData = document.createElement("td");
        // categoryTData.textContent = task.categoryT;
        // tRow.appendChild(categoryTData);
        // const dateTData = document.createElement("td");
        // dateTData.textContent = task.date;
        // tRow.appendChild(dateTData);
    //           const deadline = startOfDay(task.date);
    //        console.log("dead line date " + deadline);
    //         const displayStatus =
    //   (!isNaN(deadline) && task.statusT !== "completed" &&
    //    deadline < startOfDay(new Date())) ? "overdue" : task.statusT;

    //         }
        // }
        // const statusTData = document.createElement("td");
        // statusTData.textContent = displayStatus;
        // tRow.appendChild(statusTData);
        // taskBody.appendChild(tRow);
//     });
// }

function filterItems(term) {
    const filtered = tasks.filter(t => {
        const filTtaskName = t.nameT.toLowerCase();
        const filTtaskCategory = t.categoryT.toLowerCase();
        const filTtaskStatus = t.statusT.toLowerCase();

        if (nameT && filTtaskName !== nameT) return false;
        if (categoryT && filTtaskCategory !== categoryT) return false;
        if (statusT && filTtaskStatus !== statusT) return false;

        return (!term || filTtaskName.includes(term.toLowerCase()) || filTtaskCategory.includes(term.toLowerCase()) || filTtaskStatus.includes(term.toLowerCase()));
    });

    console.log("In filterterm: "+term);    
    console.log("tasks: "+nameT);
    console.log("item: " + filtered);
    displayTasks(filtered);
    taskBody.innerHTML = ""; // Clear the current list
    filtered.forEach((item) => console.log(item));
    // Display the filtered items
  
    return filtered;
}

// midnight helper
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0,0,0,0);
  return x;
}
// const taskList = document.getElementById("taskList");
addTaskButton.addEventListener("click", () => {
    addTask();
   // clear inputs AFTER add
    taskNameInput.value = "";
    taskCategoryInput.value = "";
    taskDateInput.value = "";
    taskStatusInput.value = "not started";
    displayTasks();
});

filterBtn.addEventListener('click', () => filterItems(filterItem.value));
// Each task should be stored as an object with properties such as task name, category, deadline, and status.