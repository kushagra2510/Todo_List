document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <span class="delete">Delete</span>
            `;

            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = "";

            // Add click event to delete task
            li.querySelector(".delete").addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });
});
