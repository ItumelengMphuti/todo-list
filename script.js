document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const todolist = document.getElementById('todolist');
    const addButton = document.querySelector('button');
  
    function addTodo() {
      const headingText = taskInput.value.trim();
    const descriptionText = document.getElementById('description').value.trim();
    if (headingText !== '') {
      const postDiv = document.createElement('div');
      const heading = document.createElement('h3');
      heading.textContent = headingText;
      const description = document.createElement('p');
      description.textContent = descriptionText;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'DELETE';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.onclick = function() {
        postDiv.remove();
      };
      postDiv.appendChild(heading);
      postDiv.appendChild(description);
      postDiv.appendChild(deleteBtn);
      todolist.appendChild(postDiv);
      taskInput.value = '';
      document.getElementById('description').value = '';
    }
    }
  
    addButton.addEventListener('click', addTodo);
  
    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  });
  