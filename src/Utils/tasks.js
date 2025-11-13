export const createTask = () => {
  const button = document.querySelector('#task-add');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    const content = document.querySelector('content');
    const addTask = document.querySelector('#task-add');
    const taskDiv = document.querySelector('#task-div');
    addTask.classList.add('hide');
    taskDiv.style.display = 'grid';
  })
}

export const getTaskName = () => {
  const button = document.querySelector('form');
  button.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitButton = e.target.elements[0];
    const taskName = document.getElementById('task').value;
    const created = document.createElement('div');
    created.id = 'created-tasks';
    const card = document.createElement('div');
    card.id = 'task-card';
    localStorage.setItem("task", taskName);
  })
}

export const clearTask = () => {
  const button = document.querySelector('.clear-task');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const card = document.querySelector('#task-card');
    card.style.display = 'none';
  })
}