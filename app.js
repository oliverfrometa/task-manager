
let tasksRemaining = document.querySelector('#tasksRemaining')
let form = document.querySelector('#form')
let addToDo = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputTask = document.getElementById('inputTask');
let inputNote = document.getElementById('inputNote');


const tasksArr = [];
const completedArr = [] ;
tasksRemaining.innerHTML = `<p> You have ${tasksArr.length} tasks remaining</p>`


// hide / show notes field

inputTask.addEventListener('click', () => {
        inputNote.style.display = "block";
    })



// create new task function
addToDo.addEventListener('click', (evt) => {
// prevent dom from submitting form
    evt.preventDefault();

// capture user data with new object
    let task = {task: inputTask.value, note: inputNote.value};

// push user data to array
    tasksArr.push(task);

// render array onto dom
    let taskList = document.createElement('p')
    taskList.classList.add('new-note-styling')
    taskList.innerHTML = `${inputTask.value} ${inputNote.value}`;
    toDoContainer.appendChild(taskList);


// reset input fields
    form.reset();
    inputNote.style.display = 'none';



// complete task 
taskList.addEventListener('click', () => {
    taskList.style.textDecoration = 'line-through';
    taskList.style.color = '#555';
    tasksArr.pop(taskList);
    completedArr.push(taskList);
})


// delete task 
taskList.addEventListener('dblclick', () => {
    taskList.remove();
})

// if less than or equal to 1 task, display "task" instead of "tasks"
    if (tasksArr.length <= 1) {
tasksRemaining.innerHTML = `<p> You have ${tasksArr.length} task remaining</p>`
    } else (tasksRemaining.innerHTML = `<p> You have ${tasksArr.length} tasks remaining</p>`)



// save to local storage

    
})