import "./style.css"
import { createTask, getTaskName, clearTask, loadPage, createProject } from "./Utils/tasks.js";

const button = document.querySelector('.clear-task');
const card = document.querySelector('#task-card');

loadPage();
createTask();
createProject();
// getTaskName();
// clearTask(button, card);

// const add = document.querySelector('.create');
// add.addEventListener('click', (e) => {
//   e.preventDefault();
//   getTaskName();
// });