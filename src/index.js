import "./style.css"
import { createTask, getTaskName, clearTask } from "./Utils/tasks.js";

const button = document.querySelector('.clear-task');
const card = document.querySelector('#task-card');

createTask();
// getTaskName();
clearTask(button, card);

// const add = document.querySelector('.create');
// add.addEventListener('click', (e) => {
//   e.preventDefault();
//   getTaskName();
// });