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
    const newWin = document.querySelector('#new-window');
    newWin.style.display = 'block';
    const taskContent = document.querySelector('#task-content');
    const options = document.querySelector('#options-list');
    const projects = document.querySelector('#projects');
    const pTitle = document.querySelector('.project-title');
    projects.style.filter = 'Blur(10px)';
    pTitle.style.filter = 'Blur(10px)';
    taskContent.style.filter = 'Blur(10px)';
    options.style.filter = 'Blur(10px)';
    container.style.filter = 'Blur(10px)';
    // const add = document.querySelector('.create');
    // add.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   getTaskName();
    })
  // })
}

export const loadPage = () => {
  const ul = document.querySelector('#task-list');
  const tasks = localStorage;
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    li.id = 'task-card';
    ul.appendChild(li);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('clear-task');
    li.appendChild(button);
    const p = document.createElement('p');
    p.classList.add('task-p');
    const taskName = localStorage.key(i);
    const value = JSON.parse(taskName)
    p.textContent = value;
    li.appendChild(p);
    button.addEventListener('click', (e) => {
      e.preventDefault();
      clearTask(value, ul, li);
    })
  }
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
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  // console.log(`Storage: ${Object.keys(localStorage)}`);
  if (localStorage.getItem(JSON.stringify(taskName))) {
    console.log('task already created');
  } else {
    li.id = 'task-card';
    ul.appendChild(li);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('clear-task');
    li.appendChild(button);
    const p = document.createElement('p');
    p.classList.add('task-p');
    p.textContent = taskName;
    li.appendChild(p);
    localStorage.setItem(JSON.stringify(taskName), JSON.stringify(taskName));
    const value = taskName;
    button.addEventListener('click', (e) => {
      e.preventDefault();
      clearTask(value, ul, li);
    })
    // tasks.push(taskName);
  }
  form.style.display = 'none';
  const card = document.querySelector('#task-card');
  card.style.display = 'flex';
  const taskAdd = document.querySelector('#task-add');
  taskAdd.style.display = 'grid';
}

export const clearTask = (value, ul, li) => {
  if (localStorage.getItem(JSON.stringify(value)))
  {
    localStorage.removeItem(JSON.stringify(value));
    ul.removeChild(li);
    console.log(`Storage: ${Object.keys(localStorage)}`);
    
  }
}

export const createProject = () => {
  const add = document.querySelector('.add');
  const createP = document.querySelector('.createP');
  const create = document.querySelector('#create-project');
  add.addEventListener('click', (e) => {
    e.preventDefault();
    add.style.display = 'none';
    create.style.display = 'grid';
    createP.addEventListener('click', (e) => {
      e.preventDefault();
      saveProject();
    })
  })
}

export const saveProject = () => {
 console.log('test');
  // const add = document.querySelector('.add');
  // add.style.display = 'none';
  // const create = document.querySelector('#create-project');
  // create.style.display = 'grid';
  // create.addEventListener('click', (e) => {
  //   e.preventDefault();
    
  // })
}
