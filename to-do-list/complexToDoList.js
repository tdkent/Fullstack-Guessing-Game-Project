// Selectors

const todoInput = document.querySelector('#todoInput');
const form = document.querySelector('form');
const todoList = document.querySelector('ul');

// State array
const todosArr = [];

// Manipulators


// Event Listeners
    // Clicks

    //This function will respond to clicks on the checkmark and X buttons once they have been added as lis into the todo list (see renderTodos function below).
    todoList.addEventListener('click', function(event) {
        if (event.target.matches('button')) {
            if (event.target.classList[0] === 'checkButton') {
                console.log('this is the check button')
            }
            if (event.target.classList[0] === 'deleteButton') {
                console.log('this is the delete button')
            }
        }
    });

    // Form

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        //store todos in object
        const todo = {
            //the text is taken from the input field
            text: todoInput.value,
            complete:false
        }
        todosArr.push(todo);
        console.log(todosArr);
        renderTodos();
        todoInput.value = '';
    });

    //This function is used to render the new state of the application.

    function renderTodos() {
        let todoListTemplate = '';
        //loop over each object pushed to to the todos array. Insert the value from the the todo.text key (which is the value inputted by the user) into a span, with two buttons next to it, within a list item. Note that a class is added to the button rather than an id, since there will be multiple lis using the same class name.
        for (let i = 0; i < todosArr.length; ++i) {
            const todo = todosArr[i];
            const todoTemplate = `
                <li>
                    <span>${todo.text}</span>
                    <button class="checkButton">✅</button>
                    <button class="deleteButton">❌</button>
                </li>
            `
            //Concatenate the template into the todoListTemplate string. 
            todoListTemplate += todoTemplate;
        }
        //Place the todoListTemplate string as the inner html (so it translates as html) of the todoList ul variable. The entire previous innerHTML value of the todoList ul is 'deleted' and re-rendered each time this function is called.
        todoList.innerHTML = todoListTemplate;
    };