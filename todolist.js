document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    
    if (!task) return;  // Prevent adding empty tasks

    let li = document.createElement("li"); 
    let span = document.createElement("span"); // Create a span for text
    span.textContent = task;
    span.classList.add("task-text"); // Add class for styling
    li.appendChild(span); 

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.onclick = function(){
        span.classList.toggle("task-completed");
        saveTasks();
    }

    li.appendChild(doneBtn);
    document.getElementById("taskList").appendChild(li);

    input.value="";
    saveTasks();

    let deleteBtn = document.createElement("button"); // ✅ Create button properly
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);  // ✅ Ensure deleteBtn is a Node
    document.getElementById("taskList").appendChild(li);  // ✅ Ensure li is a Node
    
    input.value = ""; // Clear input after adding
    saveTasks();
}

function saveTasks(){
    let tasks = [];
    document.querySelectorAll("taskList li").forEach((li)=>{
        tasks.push({
            text:li.firstChild.textContent,
            completed:li.classList.contains("completed"),
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(({ text, completed }) => {
        let li = document.createElement("li"); 
        let span = document.createElement("span"); // Create a span for text
        span.textContent = task;
        span.classList.add("task-text"); // Add class for styling
        li.appendChild(span); 

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = function () {
            li.remove();
            saveTasks();
        };

        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);
    });
}