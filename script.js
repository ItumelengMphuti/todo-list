document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskDescription');
    const taskDueDate = document.getElementById('taskDueDate');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const section2 = document.getElementById('section-2');
    const noTasksMessage = document.getElementById('noTasksMessage');

    // Function to create a new task item
    function createTaskItem(taskText, formattedDueDate) {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const dueSpan = document.createElement('span');
        dueSpan.textContent = `  Due: ${formattedDueDate}`;
        dueSpan.style.display = 'block';

        li.appendChild(taskSpan);
        li.appendChild(dueSpan);

    
      // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function() {
            li.remove();
            if (taskList.childElementCount === 0) {
                noTasksMessage.style.display = 'block';
            }
        };

        
       const tickBtn = document.createElement('button');
       tickBtn.innerHTML = '<i class="fas fa-check"></i>';
       tickBtn.classList.add('tick-btn');
       tickBtn.onclick = function() {
           li.style.textDecoration = 'line-through';
           li.style.opacity = '0.5';
           tickBtn.disabled = true;
       };


        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-pen"></i>';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = function() {
            const updatedTaskText = prompt('Enter the updated task:');
            if (updatedTaskText) {
                taskText = updatedTaskText;
                li.textContent = `${taskText} - Due: ${formattedDueDate}`;
            }
        };


        li.appendChild(tickBtn);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        return li;
    }

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const dueDate = new Date(taskDueDate.value); // Convert input to a Date object

        if (taskText !== '' && !isNaN(dueDate.getTime())) {
           
            const formattedDueDate = dueDate.toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });

            const li = createTaskItem(taskText, formattedDueDate);
            taskList.appendChild(li);

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

