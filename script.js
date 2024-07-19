document.addEventListener('DOMContentLoaded', function(event){
    const addButton = document.getElementById('add-task-btn');
    const taskInput= document.getElementById('task-input');
    const taskList= document.getElementById('task-list');

    function addTask() {
       const taskText= taskInput.value.trim();
       if(taskText===""){
        alert("Enter a task")
        return;
       }


       
       const listItem = document.createElement('li');
       listItem.textContent = taskText;
   
       // Create a new button element for removing the task
       const removeButton = document.createElement('button');
       removeButton.textContent = "Remove";
       removeButton.className = 'remove-btn';
   
       // Assign an onclick event to the remove button// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {

  // Select DOM Elements
  const addButton = document.getElementById("add-task");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

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
    };

    // Append Button and List Item
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear Input Field
    taskInput.value = "";
  }

  // Attach Event Listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Call addTask on DOMContentLoaded (Optional)
  addTask(); // This can be removed if not needed

});
