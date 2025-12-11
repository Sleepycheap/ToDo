export const createTask = () => {
  // Add Task button
  const button = document.querySelector('#task-add');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const container = document.querySelector('.content');
    const taskAdd = container.querySelector('#task-add');
    taskAdd.style.display = 'none';
    // const tasks = document.querySelector('#task-list');
    // tasks.style.display = 'none';
    const newWin = document.querySelector('#new-window');
    const cancel = document.querySelector('.cancel-task');
    cancel.addEventListener('click', (e) => {
      e.preventDefault();
      cancelTask();
    })
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
    const button = document.querySelector('.create-new_todo-submit');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      getTaskName();
    })
    })
}

export const loadPage = () => {
  // Loads the Page
  const ul = document.querySelector('#task-list');
  const dueDatePre = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  if (!localStorage.getItem(JSON.stringify('Test Task'))) {
    const testTask = {
      title: 'Test Task',
      description: 'Get all your other tasks done',
      dueDate: dueDatePre,
      priority: 'Low' 
    };
    localStorage.setItem(JSON.stringify(testTask.title), JSON.stringify(testTask));
  }
  const tasks = localStorage;
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    li.id = 'task-card';
    ul.appendChild(li);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('clear-task');
    li.appendChild(button);
    const card = document.createElement('button');
    card.classList.add('tsk-card');
    const taskName = localStorage.key(i);
    const value = JSON.parse(taskName)
    card.textContent = value;
    li.appendChild(card);
    button.addEventListener('click', (e) => {
      e.preventDefault();
      clearTask(value, ul, li);
    })
    card.addEventListener('click', (e) => {
      e.preventDefault();
      getDetails();
    })
  }
}

const dueDatePre = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
const dueDate = dueDatePre.toLocaleDateString();
const tasks = [{title: 'Test Task', description: 'Get your tasks done', dueDate: dueDate, priority: 'medium'
}];
export const getTaskName = () => {
  // Gets Task details from New Window pop-up
  const check = document.querySelector('#assign-to-project');
  console.log(`checkbox: ${check.checked}`);
  const newWin = document.querySelector('#new-window');
  const form = document.querySelector('#create-form');
  const taskName = form.querySelector('[name="new-todo-title"]').value;
  const taskDescrption = form.querySelector('[name="new-todo-body"]').value;
  const taskDue = form.querySelector('[name="new-todo-date"]').value;
  const priority = document.querySelector('#priority').value;
  const newTask = {
    title: taskName,
    description: taskDescrption,
    dueDate: dueDate || taskDue,
    priority: priority,
    project: check.checked ? 'true' : 'false'
  };
  if (localStorage.getItem(JSON.stringify(taskName))) {
    console.log(`task already created`);
  } else {
    localStorage.setItem(JSON.stringify(newTask.title), JSON.stringify(newTask));
    console.log(`local Storage: ${localStorage}`);
    const taskContent = document.querySelector('#task-content');
    const options = document.querySelector('#options-list');
    const projects = document.querySelector('#projects');
    const pTitle = document.querySelector('.project-title');
    newWin.style.display = 'none';
    projects.style.filter = 'none';
    pTitle.style.filter = 'none';
    taskContent.style.filter = 'none';
    options.style.filter = 'none';
    container.style.filter = 'none';
    const taskAdd = container.querySelector('#task-add');
    taskAdd.style.display = 'grid';
    const name = newTask.title;
    const checked = check.checked;
    // if (check.checked === false) {
    //   console.log('FASLE');
    // } else if(check.checked === true) {
    //   console.log('TRUEEE');
    // };
    if (checked) {
      addToProjects(name);
      console.log('checked');
    } else if (!checked){
      addTask(name, newTask);
      console.log('not checked');
    }
    // taskAdd function
  }
}

export const addTask = (name, newTask) => {
  // Add task to Container
  const content = document.querySelector('#container');
  const ul = document.querySelector('#task-list');
  const li = document.createElement('li');
  li.id = 'task-card';
  ul.appendChild(li);
  const clear = document.createElement('button');
  clear.classList.add('clear-task');
  clear.setAttribute('type', 'button');
  li.appendChild(clear);
  const create = document.createElement('button');
  create.classList.add('tsk-card');
  create.textContent = name;
  li.appendChild(create);
  clear.addEventListener('click', (e) => {
    e.preventDefault();
    clearTask(name, ul, li);
  })
  li.addEventListener('click', (e) => {
    e.preventDefault();
    getDetails(name);
  })
}

export const addToProjects = (name) => {
  const ul = document.querySelector('#projects-list');
  const li = document.createElement('li');
  li.id = 'project-card';
  ul.appendChild(li);
  const clear = document.createElement('button');
  clear.classList.add('clear-task');
  clear.setAttribute('type', 'button');
  li.appendChild(clear);
  const card = document.createElement('button');
  card.classList.add('prj-card');
  card.textContent = name;
  card.setAttribute('type', 'button');
  li.appendChild(card);
  clear.addEventListener('click', (e) => {
    e.preventDefault();
    clearTask(name, ul, li);
  })
}


export const clearTask = (value, ul, li) => {
  if (localStorage.getItem(JSON.stringify(value)))
  {
    localStorage.removeItem(JSON.stringify(value));
    ul.removeChild(li);
    console.log(`Storage: ${Object.keys(localStorage)}`);
  } else if (value === 'Test Task') {
    localStorage.removeItem(JSON.stringify('Test Task'));
    ul.removeChild(li);
  }
}

export const clearProject = () => {
  const name = document.querySelector('.prj-card').textContent;

}

export const cancelTask = () => {
  // Cancel New Window 
  const container = document.querySelector('#container');
  const taskContent = document.querySelector('#task-content');
  const options = document.querySelector('#options-list');
  const projects = document.querySelector('#projects');
  const pTitle = document.querySelector('.project-title');
  const newWin = document.querySelector('#new-window');
  newWin.style.display = 'none';
  projects.style.filter = 'none';
  pTitle.style.filter = 'none';
  taskContent.style.filter = 'none';
  options.style.filter = 'none';
  container.style.filter = 'none';
  const taskAdd = container.querySelector('#task-add');
  taskAdd.style.display = 'grid';
}


export const getDetailsStart = () => {
  // Build details window for default task
  const tasks = document.querySelector('#created-tasks');
  tasks.style.display = 'none';
  const details = document.querySelector('#task-details');
  details.style.display = 'flex';
  const detailTitle = document.createElement('p');
  detailTitle.id = 'detail-title';
  detailTitle.textContent = 'Title: Test Task';
  details.appendChild(detailTitle);
  const detailDesc = document.createElement('p');
  detailDesc.id = 'detail-desc';
  detailDesc.textContent = 'Description: Get all of your other tasks done';
  details.appendChild(detailDesc);
  const detailPrio = document.createElement('p');
  detailPrio.id = 'detail-prio';
  detailPrio.textContent = 'Priority: Low';
  details.appendChild(detailPrio);
  const detailDue = document.createElement('p');
  detailDue.id = 'detail-due';
  const dueDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  const date = dueDate.toLocaleDateString();
  detailDue.textContent = `Due Date: ${date}`;
  details.appendChild(detailDue);
}

export const getDetails = () => {
  // Build details window for new tasks
  const card = document.querySelector('.tsk-card');
  const closest = card.closest('#task-card');

  // const name = card.value; 
  
  // const name = closest.textContent;
  console.log(`name: ${closest.textContent}`);
  const newTask = localStorage.getItem(JSON.stringify(name));
  
  // const tasks = document.querySelector('#created-tasks');
  // tasks.style.display = 'none';
  // const details = document.querySelector('#task-details');
  // details.style.display = 'flex';
  // const detailTitle = document.createElement('p');
  // detailTitle.id = 'detail-title';
  // detailTitle.textContent =  `Title: ${newTask.title}`;
  // details.appendChild(detailTitle);
  // const detailDesc = document.createElement('p');
  // detailDesc.id = 'detail-desc';
  // detailDesc.textContent = `Description: ${newTask.description}`;
  // details.appendChild(detailDesc);
  // const detailPrio = document.createElement('p');
  // detailPrio.id = 'detail-prio';
  // detailPrio.textContent = `Priority: ${newTask.priority}`;
  // details.appendChild(detailPrio);
  // const detailDue = document.createElement('p');
  // detailDue.id = 'detail-due';
  // detailDue.textContent = `Due Date: ${newTask.dueDate}`;
  // details.appendChild(detailDue);
}

export const closeDetails = () => {
  // Closes Details window
  const details = document.querySelector('#task-details');
  details.style.display = 'none';
  const tasks = document.querySelector('#created-tasks');
  tasks.style.display =  'flex';
}


