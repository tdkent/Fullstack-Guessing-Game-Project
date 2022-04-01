// Selectors

const todoInput = document.querySelector('#todoInput');
const form = document.querySelector('form');
const todoList = document.querySelector('ul');

// Manipulators


// Event Listeners
    // Clicks

    todoList.addEventListener('click', function(event) {
        if(event.target.matches('button')) {
            const parent = event.target.parentNode;
            parent.remove()

        }
    })

    // Form

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const value = todoInput.value;
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        
    });