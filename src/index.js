import "./style.css"
import { createTask, getTaskName, clearTask, loadPage } from "./Utils/tasks.js";

const button = document.querySelector('.clear-task');
const card = document.querySelector('#task-card');

loadPage();
createTask();
// getTaskName();
// clearTask(button, card);

// const add = document.querySelector('.create');
// add.addEventListener('click', (e) => {
//   e.preventDefault();
//   getTaskName();
// });