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
   
       // Assign an onclick event to the remove button
       removeButton.onclick = function() {
           listItem.remove();
       };
   
       // Append the remove button to the <li> element
       listItem.appendChild(removeButton);
   
       // Append the <li> to the task list
       const taskList = document.getElementById('taskList');
       taskList.appendChild(listItem);
   
       // Clear the task input field
       taskInput.value = "";
   }
   
   // Add an event listener to the add task button
   document.getElementById('addTaskButton').addEventListener('click', addTask);
   
   // Add an event listener to taskInput for the 'keypress' event
   document.getElementById('taskInput').addEventListener('keypress', function(event) {
       if (event.key === 'Enter') {
           addTask();
       }
   });
   
   // Invoke the addTask function on DOMContentLoaded
   document.addEventListener('DOMContentLoaded', function() {
       // Your data fetching logic or any initial setup can go here
       console.log('DOM fully loaded and parsed');
   });
    


})
