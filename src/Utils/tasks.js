const items = [];
export const createTask = () => {
  // Add Task button
  const button = document.querySelector('#task-add');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    const container = document.querySelector('.content');
    // const parent = document.createElement('div');
    // parent.id = 'task-div';
    // parent.style.display = 'grid';
    // container.appendChild(parent);
    const taskAdd = container.querySelectorAll('#task-add');
    let 
    for (let i = 0; i === items.length; i++) {
      items.push[i];
      taskAdd[i].style.display = 'none';
    }
    const card = document.querySelector('#task-card');
    card.style.display = 'none';
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
  // e.preventDefault();
  console.log(`testing taskname`);
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
    console.log(` Adding task: ${taskName}`);
    console.log(`tasks after adding: ${tasks}`);
  }
  // tasks.push(taskName);
  console.log(`tasks: ${tasks}`);
  // content.removeChild(parent);
  form.style.display = 'none';
  // console.log(`testing: ${taskName}`);
  const card = document.querySelector('#task-card');
  card.style.display = 'flex';
  const taskAdd = document.querySelector('#task-add');
  taskAdd.style.display = 'grid';
}

export const clearTask = (button) => {
  // const button = document.querySelector('.clear-task');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const card = document.querySelector('#task-card');
    card.style.display = 'none';
  })
}