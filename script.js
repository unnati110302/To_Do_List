document.addEventListener("DOMContentLoaded", function(){
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function(){
        const taskText = taskInput.value.trim();
        if(taskText ===""){
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<span>${taskText}</span>
        <button class ="delete">Delete</button>`

        taskItem.addEventListener("click", function(){
            taskList.classList.toggle("completed");
        });

        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", function(){
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
        taskInput.value = "";

    });

    taskInput.addEventListener("keydown", function(event){
        if(event.key=="Enter"){
            addTaskButton.click();
        }
    });

});