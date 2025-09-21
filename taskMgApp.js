console.log("Hello, World!");

const taskNameInput = document.getElementById("taskName");
const taskCategoryInput = document.getElementById("taskCategory");
const taskDateInput = document.getElementById("taskDate");
const taskStatusInput = document.getElementById("taskStatus");
const addTaskButton = document.getElementById("addTaskButton");
const taskBody = document.getElementById("taskBody");
const MS_PER_DAY = 24*60*60*1000;
const GRACE_DAYS = 0; // set to 2,3… if you want extra days before “Overdue”

const today    = startOfDay(new Date());
console.log(taskNameInput);
console.log(taskCategoryInput);
console.log(taskDateInput);
console.log(taskStatusInput);
console.log(addTaskButton);
let tasks = [];
function addTask() {
    nameT = taskNameInput.value;
    category = taskCategoryInput.value;
    date = taskDateInput.value;
    statusT = taskStatusInput.value;
    console.log(nameT, category, date, statusT);
// group together parts of task to make a whole task
    if (!nameT || !category || !date || !statusT) {
        alert("Please fill in all fields before adding a task.");
        return;
    }
    // create newTask object
    const newTask = {
    nameT,
    category,
    date,
    statusT
    };

// Push task(newTask) object into tasks array
    tasks.push(newTask);
    console.log(tasks);
    
}

// take the addTask function and attach it to the button
addTaskButton.addEventListener("click", addTask);
console.log(addTaskButton);

// clear out the inputs after adding a task for next use
nameT = taskNameInput.value="";
category = taskCategoryInput.value="";
date = taskDateInput.value="";
statusT = taskStatusInput.value="not started";
console.log(nameT, category, date, statusT);
// create fuction to display tasks
function displayTasks() {
    taskBody.innerHTML = "";
    // get the task list element for every item from the DOM
    //  this loop will display each task list

    tasks.forEach((task) => {
        // create new table row for each task
       const deadline = startOfDay(task.date);
           console.log("dead line date " + deadline);
       const tRow = document.createElement("tr");
        // get task name(element) from html 2)add the user input to the element 3) append the element to the row:
        const nameTData = document.createElement("td");
        nameTData.textContent = task.nameT;
        tRow.appendChild(nameTData);
        // get task category(element) from html 2)add the user input to the element 3) append the element to the row:
        const categoryTData = document.createElement("td");
        categoryTData.textContent = task.category;
        tRow.appendChild(categoryTData);
        // get task date(element) from html 2)add the user input to the element 3) append the element to the row:
        const dateTData = document.createElement("td");
        dateTData.textContent = task.date;
        tRow.appendChild(dateTData);
        // mark overdue if past today + grace and not completed
        if (!isNaN(deadline) && (task.statusT !== "completed")) {
            console.log("status check       " + task.statusT    );
            const limit = new Date(today.getTime() - GRACE_DAYS*MS_PER_DAY);
            if (deadline < limit) {
                task.statusT = "Overdue";
                console.log("overdue check       " + task.statusT    );
            }
        }
       // get task status(element) from html 2)add the user input to the element 3) append the element to the row:
        const statusTData = document.createElement("td");
        statusTData.textContent = task.statusT;
        tRow.appendChild(statusTData);
        // append the row to the table body
        taskBody.appendChild(tRow);
    });

}

// midnight helper
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0,0,0,0);
  return x;
}
const taskList = document.getElementById("taskList");
addTaskButton.addEventListener("click", displayTasks);

// Each task should be stored as an object with properties such as task name, category, deadline, and status.