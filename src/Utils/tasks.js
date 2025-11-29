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
  const list = document.querySelector('#task-list');
  list.style.display = 'block';
  // console.log(`testing taskname`);
  const content = document.querySelector('.content');
  const taskName = document.getElementById('task').value;
  const parent = document.querySelector('#task-div');
  const created = document.querySelector('#created-tasks');
  const add = document.querySelector('.create');
  const cancel = document.querySelector('.cancel');
  const form = document.querySelector('#task-div');
  const taskList = document.querySelector('ul');
  const li = document.createElement('li');
  if (Storage.includes(taskName)) {
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
    localStorage.setItem("task", JSON.stringify(taskName));
  }
  form.style.display = 'none';
  const card = document.querySelector('#task-card');
  card.style.display = 'flex';
  const taskAdd = document.querySelector('#task-add');
  taskAdd.style.display = 'grid';
}

export const clearTask = (button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const card = document.querySelector('#task-card');
    card.style.display = 'none';
  })
}