export const createTask = () => {
  // Add Task button
  const button = document.querySelector('#task-add');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const container = document.querySelector('.content');
    const taskAdd = container.querySelector('#task-add');
    taskAdd.style.display = 'none';
    const tasks = document.querySelector('#task-list');
    tasks.style.display = 'none';
    const taskDiv = document.querySelector('#task-div');
    taskDiv.style.display = 'grid';
    const add = document.querySelector('.create');
    add.addEventListener('click', (e) => {
      e.preventDefault();
      getTaskName();
    })
  })
}

export const loadPage = () => {

}

const tasks = ['Test Task'];
export const getTaskName = () => {
<<<<<<< HEAD
  const tasks = [];
=======
  const list = document.querySelector('#task-list');
  list.style.display = 'block';
  // console.log(`testing taskname`);
>>>>>>> c4ee2dd5cdfe72b3c90658ec8dffc57450e87b8f
  const content = document.querySelector('.content');
  const taskName = document.getElementById('task').value;
  const parent = document.querySelector('#task-div');
  const created = document.querySelector('#created-tasks');
  const add = document.querySelector('.create');
  const cancel = document.querySelector('.cancel');
  const form = document.querySelector('#task-div');
  const taskList = document.querySelector('ul');
  const li = document.createElement('li');
  if (tasks.includes(taskName)) {
    console.log('task already created');
  } else {
    li.id = 'task-card';
    taskList.appendChild(li);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('clear-task');
    li.appendChild(button);
    const p = document.createElement('p');
    p.classList.add('task-p');
    p.textContent = taskName;
    li.appendChild(p);
    tasks.push(taskName);
  }
  form.style.display = 'none';
  const card = document.querySelector('#task-card');
  const addTask = document.querySelector('#task-add');
  card.style.display = 'flex';
<<<<<<< HEAD
  window.localStorage.setItem("task", taskName);
  // const test = localStorage.getItem(task);
  // console.log(`test: ${typeof(taskName)}`);
  // parent.removeChild(form);
  // parent.removeChild(add);
  // parent.removeChild(cancel);
  content.removeChild(parent);
  const taskList = document.querySelector('ul');
  // taskList.id = 'task-list';
  // created.appendChild(taskList);
  const li = document.createElement('li');
  li.id = 'task-card'
  taskList.appendChild(li);
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('clear-task');
  // button.addEventListener()
  li.appendChild(button);
  clearTask(button, card);
  const p = document.createElement('p');
  p.classList.add('task-p');
  p.textContent = taskName;
  li.appendChild(p);
  addTask.classList.remove('hide');
}

export const clearTask = (button, card) => {

=======
  const taskAdd = document.querySelector('#task-add');
  taskAdd.style.display = 'grid';
}

export const clearTask = (button) => {
>>>>>>> c4ee2dd5cdfe72b3c90658ec8dffc57450e87b8f
  button.addEventListener('click', (e) => {
    e.preventDefault();
    for (const task of document.getElementsByClassName('clear-task')) {
      const p = task.closest('li');
      const closest = card.closest('li');
      console.log(`closest: ${closest}`);
      closest.style.display = 'none';
      console.log(p);
    }
  })
}