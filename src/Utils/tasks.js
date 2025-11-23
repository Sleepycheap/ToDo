export const createTask = () => {
  const button = document.querySelector('#task-add');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    const container = document.querySelector('.content');
    const parent = document.createElement('div');
    parent.id = 'task-div';
    container.appendChild(parent);
    const taskAdd = document.querySelector('#task-add');
    taskAdd.classList.add('hide');
    const card = document.querySelector('#task-card');
    card.style.display = 'none';
    // const taskDiv = document.createElement('div');
    // taskDiv.id = "task-div";
    // content.appendChild(taskDiv);
    const form = document.createElement('form');
    form.id = 'create-task';
    parent.appendChild(form);
    const label = document.createElement('label');
    label.setAttribute('for', 'task');
    form.appendChild(label);
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.id = 'task';
    form.appendChild(input);
    const button = document.createElement('button');
    button.setAttribute('form', 'create-task');
    button.setAttribute('type', 'submit');
    button.classList.add('create');
    button.textContent = 'Add';
    parent.appendChild(button);
    const reset = document.createElement('button');
    reset.setAttribute('form', 'create-task');
    reset.setAttribute('type', 'reset');
    reset.classList.add('cancel');
    reset.textContent = 'Cancel';
    parent.appendChild(reset);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      getTaskName();
    })
  })
}

// export const getTaskName = () => {
//   const button = document.querySelector('form');
//   button.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const submitButton = e.target.elements[0];
   
//   })
// }


export const getTaskName = () => {
  const tasks = [];
  const content = document.querySelector('.content');
  const taskName = document.getElementById('task').value;
  const parent = document.querySelector('#task-div');
  const created = document.querySelector('#created-tasks');
  const add = document.querySelector('.create');
  const cancel = document.querySelector('.cancel');
  const form = document.querySelector('form');
  const card = document.querySelector('#task-card');
  const addTask = document.querySelector('#task-add');
  card.style.display = 'flex';
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