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
            //the event is a click. the target is a button inside the todoList variable (which is the ul). the parent of the event.target (the button within the li) is the li.
            const parent = event.target.parentNode;
            //dataset is the standard way to read html data attributes in js. parent.dataset.index is the data-index value of the dataset value (the data attribute in html) of the li.
            const index = parent.dataset.index;
            if (event.target.classList[0] === 'checkButton') {
                //if the checkButton button is clicked, the 'complete' key of the corresponding (as determined by the index variable defined above) todo object that has been pushed into the todosArr array, will changed from 'false' to 'true'.
                todosArr[index].complete = true; 
            }
            if (event.target.classList[0] === 'deleteButton') {
                //if the delete button is clicked, the todosArr is spliced at the index location, and the li will be removed from the page.
                todosArr.splice(index, 1);
            }
            //Because this function contains functions that update the state, in order for those changes to be shown to the user, the renderToDos function needs to run each time.
            renderTodos();
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
        //Data-index attribute is given a value of i and used to store extra data about the li. 
        //https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
        for (let i = 0; i < todosArr.length; ++i) {
            const todo = todosArr[i];
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
            //The span class uses a conditional (ternary) operator to create an if/else statement. 1. condition (todo.complete -- this is the key/value pair of the todo object), 2. an expression (the class 'checked-off') to execute if the condition evaluates to a truthy value (ie if todo.complete === true), written as ? 'checkedOff', and 3. an expression ('') to execute if falsy (written as : '')
            const todoTemplate = `
                <li data-index="${i}">
                    <span class="${todo.complete ? 'checked-off' : ''}">${todo.text}</span>
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