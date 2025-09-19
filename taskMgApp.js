console.log("Hello, World!");

const taskNameInput = document.getElementById("taskName");
const taskCategoryInput = document.getElementById("taskCategory");
const taskDateInput = document.getElementById("taskDate");
const taskStatusInput = document.getElementById("taskStatus");
const addTaskButton = document.getElementById("addTaskButton");
const taskBody = document.getElementById("taskBody");

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
    console.log(name, category, date, status);
// group together parts of task to make a whole task
    const newTask = {
    nameT,
    category,
    date,
    statusT
    };

// take task object and push it into tasks array
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
statusT = taskStatusInput.value="Not Started";
console.log(nameT, category, date, statusT);
// create fuction to display tasks
function displayTasks() {
    taskBody.innerHTML = "";
    // get the task list element for every item from the DOM
    //  this loop will display each task list
    tasks.forEach((task) => {
        // create new table row for each task
        const trow = document.createElement("tr");
        // get task name(element) from html 2)add the user input to the element 3) append the element to the row:
        const nameTData = document.createElement("td");
        nameTData.textContent = task.nameT;
        trow.appendChild(nameTData);
        // get task category(element) from html 2)add the user input to the element 3) append the element to the row:
        const categoryTData = document.createElement("td");
        categoryTData.textContent = task.category;
        trow.appendChild(categoryTData);
        // get task date(element) from html 2)add the user input to the element 3) append the element to the row:
        const dateTData = document.createElement("td");
        dateTData.textContent = task.date;
        trow.appendChild(dateTData);
       // get task status(element) from html 2)add the user input to the element 3) append the element to the row:
        const statusTData = document.createElement("td");
        statusTData.textContent = task.statusT;
        trow.appendChild(statusTData);
        // append the row to the table body
        taskBody.appendChild(trow);
    });

}
const taskList = document.getElementById("taskList");
addTaskButton.addEventListener("click", displayTasks);