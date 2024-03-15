document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');

    function addTodo() {
        const taskText = taskInput.value.trim();
        const descriptionText = descriptionInput.value.trim();

        if (taskText !== '') {
            // Create a new list item
            const li = document.createElement('li');

            // Create a heading element for the task
            const heading = document.createElement('h3');
            heading.textContent = taskText;

            // Create a paragraph element for the description
            const description = document.createElement('p');
            description.textContent = descriptionText;

            // Append the heading and description to the list item
            li.appendChild(heading);
            li.appendChild(description);

            // Append the list item to the todolist container in index.html
            const todolist = window.opener.document.getElementById('todolist');
            todolist.appendChild(li);

            // Clear the input fields
            taskInput.value = '';
            descriptionInput.value = '';
        }
    }

    const addButton = document.querySelector('.container-2 button');
    addButton.addEventListener('click', addTodo);

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    descriptionInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
