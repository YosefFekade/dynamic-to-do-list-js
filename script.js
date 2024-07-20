// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {

  // Select DOM Elements
  const addButton = document.getElementById("add-task");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load Tasks from Local Storage
  function loadTasks() {
    const tasksJSON = localStorage.getItem("tasks");
    let tasks = [];

    if (tasksJSON) {
      try {
        tasks = JSON.parse(tasksJSON);
      } catch (error) {
        console.error("Error parsing tasks from Local Storage:", error);
      }
    }

    // Create list elements for loaded tasks
    tasks.forEach(task => {
      const listItem = document.createElement("li");
      listItem.textContent = task;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
        removeTask(task); // Remove from tasks array and Local Storage
      };

      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
    });
  }

  // Create the addTask Function
  function addTask() {
    // Get and Trim User Input
    const taskText = taskInput.value.trim();

    // Check if Task is Empty
    if (!taskText) {
      alert("Please enter a task!");
      return;
    }

    // Create List Item and Remove Button
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add Remove Functionality to Button
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
      removeTask(taskText); // Remove from tasks array and Local Storage
    };

    // Append Button and List Item
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Update Tasks Array and Local Storage
    const tasks = getTasksFromLocalStorage();
    tasks.push(taskText);
    saveTasksToLocalStorage(tasks);

    // Clear Input Field
    taskInput.value = "";
  }

  // Function to get tasks from Local Storage
  function getTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem("tasks");
    let tasks = [];

    if (tasksJSON) {
      try {
        tasks = JSON.parse(tasksJSON);
      } catch (error) {
        console.error("Error parsing tasks from Local Storage:", error);
      }
    }

    return tasks;
  }

  // Function to save tasks to Local Storage
  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to remove a task from tasks array and Local Storage
  function removeTask(taskText) {
    const tasks = getTasksFromLocalStorage();
    const taskIndex = tasks.indexOf(taskText);

    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      saveTasksToLocalStorage(tasks);
    }
  }

  // Load Tasks on Page Load
  loadTasks();

  // Attach Event Listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
