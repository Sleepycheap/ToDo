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
  const pl = document.querySelector('#projects-list');
  const ul = document.querySelector('#task-list');
  const dueDatePre = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  const dueDate = dueDatePre.toLocaleDateString();
  if (!localStorage.getItem(JSON.stringify('Test Task'))) {
    const testTask = {
      title: 'Test Task',
      description: 'Get all your other tasks done',
      dueDate: dueDate,
      priority: 'Low' 
    };
    localStorage.setItem(JSON.stringify(testTask.title), JSON.stringify(testTask));
  }
  const tasks = localStorage;
  for (let i = 0; i < tasks.length; i++) {
    const taskName = localStorage.key(i);
    const item = localStorage.getItem(taskName);
    const name = JSON.parse(item);
    const li = document.createElement('li');
    if (name.project === 'true') {
      li.id = 'project-card';
      pl.appendChild(li);    
    } else {
      li.classList.add('task-card');
      ul.appendChild(li);
    }
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('clear-task');
    li.appendChild(button);
    const card = document.createElement('button');
    if (name.project === 'true') {
      card.classList.add('prj-card')
    } else {
      card.classList.add('tsk-card');
    }
    const value = JSON.parse(taskName)
    card.textContent = value;
    li.appendChild(card);
    button.addEventListener('click', (e) => {
      e.preventDefault();
      clearTask(value, ul, li);
    })
  }
  const taskCards = document.querySelectorAll('.tsk-card');
  taskCards.forEach(item => {
    item.addEventListener('click', (e) => {
      console.log(`item: ${item.textContent}`);
      e.preventDefault();
      getDetailsProjects(item);
    })
  })
  const projCards = document.querySelectorAll('.prj-card');
  projCards.forEach(item => {
    item.addEventListener('click', (e) => {
      console.log(`item: ${item.textContent}`);
      e.preventDefault();
      getDetailsProjects(item);
    })
  })
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
    // console.log(`local Storage: ${localStorage}`);
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
    const prio = newTask.priority;
    if (checked) {
      addToProjects(name, prio);
      console.log('checked');
    } else if (!checked){
      addTask(name, prio);
      console.log('not checked');
    }
  }
}

export const addTask = (name, prio) => {
  // Add task to Container
  const content = document.querySelector('#container');
  const ul = document.querySelector('#task-list');
  const li = document.createElement('li');
  li.classList.add('task-card');
  ul.appendChild(li);
  const clear = document.createElement('button');
  clear.classList.add('clear-task');
  clear.setAttribute('type', 'button');
  console.log(`prio: ${prio}`);
  li.appendChild(clear);
  const create = document.createElement('button');
  create.classList.add('tsk-card');
  create.textContent = name;
  if (prio === 'High') {
    create.style.backgroundColor = 'red';
    create.style.color = 'white';
  }
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

export const addToProjects = (name, prio) => {
  const ul = document.querySelector('#projects-list');
  const li = document.createElement('li');
  li.id = 'project-card';
  ul.appendChild(li);
  const clear = document.createElement('button');
  clear.classList.add('clear-task');
  clear.setAttribute('type', 'button');
  li.appendChild(clear);
  const create = document.createElement('button');
  create.classList.add('prj-card');
  if (prio === 'High') {
    create.style.backgroundColor = 'red';
    create.style.color = 'white';
  }
  create.textContent = name;
  li.appendChild(create);
  clear.addEventListener('click', (e) => {
    e.preventDefault();
    clearTask(name, ul, li);
  })

  const cards = document.querySelectorAll('.prj-card');
  cards.forEach(item => {
    item.addEventListener('click', (e) => {
      console.log(`card: ${item.textContent}`);
      e.preventDefault();
      getDetailsProjects(item);
    })
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

export const getDetails = (item) => { 
  // Build details window for new tasks
  console.log(`Name: ${item}`);
  const preName = localStorage.getItem(JSON.stringify(item));
  console.log(`preNAme: ${preName}`);
  const newTask = JSON.parse(preName);
  console.log(`task: ${newTask}`);
  const tasks = document.querySelector('#created-tasks');
  tasks.style.display = 'none';
  const details = document.querySelector('#task-details');
  details.style.display = 'flex';
  const detailTitle = document.querySelector('#detail-title');
  detailTitle.id = 'detail-title';
  detailTitle.textContent =  `Title: ${newTask.title}`;
  const detailDesc = document.querySelector('#detail-desc');
  detailDesc.id = 'detail-desc';
  detailDesc.textContent = `Description: ${newTask.description}`;
  const detailPrio = document.querySelector('#detail-prio');
  detailPrio.id = 'detail-prio';
  detailPrio.textContent = `Priority: ${newTask.priority}`;
  const detailDue = document.querySelector('#detail-due');
  detailDue.id = 'detail-due';
  detailDue.textContent = `Due Date: ${newTask.dueDate}`;
  const cancel = document.querySelector('.details-cancel');
  cancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeDetails();
  })
}

export const getDetailsProjects = (item) => {
  const name = item.textContent;
  const preName = localStorage.getItem(JSON.stringify(name));
  console.log(`preName: ${preName}`);
  const newProject = JSON.parse(preName);
  console.log(`test: ${newProject}`);
  const tasks = document.querySelector('#created-tasks');
  tasks.style.display = 'none';
  const details = document.querySelector('#task-details');
  details.style.display = 'flex';
  const detailTitle = document.querySelector('#detail-title');
  detailTitle.id = 'detail-title';
  detailTitle.textContent = `Title: ${newProject.title}`;
  const detailDesc = document.querySelector('#detail-desc');
  detailDesc.id = 'detail-desc';
  detailDesc.textContent = `Description: ${newProject.description}`
  const detailPrio = document.querySelector('#detail-prio');
  detailPrio.id = 'detail-prio';
  detailPrio.textContent = `Priority: ${newProject.priority}`;
  const detailDue = document.querySelector('#detail-due');
  detailDue.id = 'detail-due';
  detailDue.textContent = `Due Date: ${newProject.dueDate}`;
  const cancel = document.querySelector('.details-cancel');
  cancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeDetails();
  })

}

export const closeDetails = () => {
  // Closes Details window
  const details = document.querySelector('#task-details');
  details.style.display = 'none';
  const tasks = document.querySelector('#created-tasks');
  tasks.style.display =  'flex';
}

// export const displayInbox = () => {

//   loadPage();
// }

export const displayToday = () => {
  const ls = localStorage;
  const date = new Date(Date.now());
  const dueDate = date.toLocaleDateString();
  console.log(`time: ${dueDate}`);
  Object.keys(ls).forEach(key => {
    const d = localStorage.getItem(key);
    const parsed = JSON.parse(d);
    console.log(`parsed: ${parsed}`);
    if (parsed.dueDate === dueDate && parsed.project === true) {
      const name = parsed.title;
      addToProjects(name, parsed.priority)
    } else if (parsed.dueDate === dueDate && parsed.project === false) {
      const name = parsed.title;
      addTask(name, parsed.priority);
    }
  });
}


// export const addToProjects = (name, prio) => {
//   const ul = document.querySelector('#projects-list');
//   const li = document.createElement('li');
//   li.id = 'project-card';
//   ul.appendChild(li);
//   const clear = document.createElement('button');
//   clear.classList.add('clear-task');
//   clear.setAttribute('type', 'button');
//   li.appendChild(clear);
//   const create = document.createElement('button');
//   create.classList.add('prj-card');
//   if (prio === 'High') {
//     create.style.backgroundColor = 'red';
//     create.style.color = 'white';
//   }
//   create.textContent = name;
//   li.appendChild(create);
//   clear.addEventListener('click', (e) => {
//     e.preventDefault();
//     clearTask(name, ul, li);
//   })

//   const cards = document.querySelectorAll('.prj-card');
//   cards.forEach(item => {
//     item.addEventListener('click', (e) => {
//       console.log(`card: ${item.textContent}`);
//       e.preventDefault();
//       getDetailsProjects(item);
//     })
//   })
// }
