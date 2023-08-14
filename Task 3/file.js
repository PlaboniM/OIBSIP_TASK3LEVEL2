const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = taskText;
        taskItem.addEventListener('click', toggleComplete);
        pendingTasks.appendChild(taskItem);
        taskInput.value = '';
    }
});

function toggleComplete(event) {
    const taskItem = event.target;
    taskItem.classList.toggle('completed');
    if (taskItem.parentElement === pendingTasks) {
        completedTasks.appendChild(taskItem);
    } else {
        pendingTasks.appendChild(taskItem);
    }
}

pendingTasks.addEventListener('click', deleteTask);
completedTasks.addEventListener('click', deleteTask);

function deleteTask(event) {
    const taskItem = event.target;
    if (taskItem.tagName === 'LI') {
        taskItem.remove();
    }
}
