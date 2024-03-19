document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskDescription');
    const taskDueDate = document.getElementById('taskDueDate');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const section2 = document.getElementById('section-2');
    const noTasksMessage = document.getElementById('noTasksMessage');

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const dueDate = new Date(taskDueDate.value); // Convert input to a Date object

        if (taskText !== '' && !isNaN(dueDate.getTime())) {
            // Format the due date and time
            const formattedDueDate = dueDate.toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });

            const li = document.createElement('li');
            li.textContent = `${taskText} - Due: ${formattedDueDate}`;
            taskList.appendChild(li);

            // Append the list item to section-2
            section2.appendChild(li);

            // Scroll back up to section-2
            section2.scrollIntoView({ behavior: 'smooth' });

            // Clear input fields after adding task
            taskInput.value = '';
            taskDueDate.value = '';

            // Hide the "NO TASKS" message if there are tasks in the list
            noTasksMessage.style.display = 'none';
        }
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click(); // Simulate click on Add Task button when Enter is pressed in input field
        }
    });
});

