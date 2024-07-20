
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
