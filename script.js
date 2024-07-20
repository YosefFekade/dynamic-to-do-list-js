document.addEventListener("DOMContentLoaded", function () {

 
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
   
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

      tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = task;
  
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = function () {
          taskList.removeChild(listItem);
          removeTask(task);
        };
  
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
      });
    }
  

    function addTask() {
      const taskText = taskInput.value.trim();
  

      if (!taskText) {
        alert("Please enter a task!");
        return;
      }
  

      const listItem = document.createElement("li");
      listItem.textContent = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
  

      removeButton.onclick = function () {
        taskList.removeChild(listItem);
        removeTask(taskText); 
      };
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  

      const tasks = getTasksFromLocalStorage();
      tasks.push(taskText);
      saveTasksToLocalStorage(tasks);
      taskInput.value = "";
    }
  
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
  
    function saveTasksToLocalStorage(tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function removeTask(taskText) {
      const tasks = getTasksFromLocalStorage();
      const taskIndex = tasks.indexOf(taskText);
  
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveTasksToLocalStorage(tasks);
      }
    }
  
    loadTasks();

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
