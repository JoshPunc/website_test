const taskInput = document.getElementById("input-box");
const addTaskBtn = document.getElementById("addtask");
const taskList = document.getElementById("todoList");

let tasks = JSON.parse(localStorage.getItem("tasks"));

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span onclick="toggleComplete(${index})">${task.text}</span>
            <div class="task-buttons">
              <button onclick="deleteTask(${index})">❌</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text: taskText, completed: false});
        taskInput.value = "";
        saveTask();
        renderTasks();
    }
}

addTaskBtn.addEventListener('click', addTask);