let TheInput = document.querySelector(".container input");
let plusbttn = document.getElementById('plus');
let Alltasks = document.querySelector(".task-content");
let massagenoshow = document.querySelector(".no-tasks-message");
let taskCount = document.getElementById("task-count");
let completedCount = document.getElementById("completed-count");
let deleteall = document.getElementById('delall');

let tasks = [];

// Focus on input field when the window loads
window.onload = function () {
    TheInput.focus();
}

// Add task
plusbttn.onclick = function() {
    if (TheInput.value === '') {
        console.log("Please fill in the task.");
    } else {
        massagenoshow.remove();
        let taskText = TheInput.value;
        let mainspan = document.createElement("span");
        let btndelete = document.createElement("span");
        let text = document.createTextNode(taskText);
        let deltext = document.createTextNode("Delete");

        mainspan.appendChild(text);
        mainspan.className = 'taskbox';
        btndelete.appendChild(deltext);
        btndelete.className = 'delete';
        mainspan.appendChild(btndelete);
        Alltasks.appendChild(mainspan);

        // Clear input field
        TheInput.value = '';
        TheInput.focus();

        // Update tasks array and counts
        tasks.push(taskText);
        updateCounts();
    }
};

// Update task counts
function updateCounts() {
    taskCount.innerText = tasks.length;
    completedCount.innerText = tasks.filter(task => task.finished).length; // For future implementation
}

// Delete task
Alltasks.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        let taskBox = e.target.parentElement;
        let taskText = taskBox.firstChild.textContent;
        tasks = tasks.filter(task => task !== taskText);
        taskBox.remove();
        updateCounts();
        if (tasks.length === 0) {
            Alltasks.appendChild(massagenoshow);
        }
    }
});

// Delete all tasks
deleteall.onclick = function() {
    tasks = [];
    Alltasks.innerHTML = '';
    Alltasks.appendChild(massagenoshow);
    updateCounts();
};
