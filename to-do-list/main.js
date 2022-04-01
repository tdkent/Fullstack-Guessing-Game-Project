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
            parent.remove();
        }
    })

    // Form

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const value = todoInput.value;
        // create li and span
        const li = document.createElement('li');
        const span = document.createElement('span');
        // set span to equal the value put into the input field
        span.textContent = value;
        // create button with text content
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        //add span and button into li
        li.appendChild(span);
        li.appendChild(deleteButton);
        //and li into ul (defined in global)
        todoList.appendChild(li);
    });