import "./style.css"
import { createTask, getTaskName, clearTask, loadPage, createProject, getDetailsStart, closeDetails } from "./Utils/tasks.js";

// const clear = document.querySelector('.clear-task');
// const card = document.querySelector('.prj-card');
// const name = card.textContent;
// const ul = document.querySelector('#projects-list');
// const li = document.querySelector('#projects-card');

createTask();
loadPage();

// card.addEventListener('click', (e) => {
//   e.preventDefault();
//   getDetailsStart();
// })

// const close = document.querySelector('.details-cancel');
// close.addEventListener('click', (e) => {
//   e.preventDefault();
//   closeDetails();
// })
// createProject();
// getTaskName();
// clear.addEventListener('click', (e) => {
//   clearTask(name, ul, li);
// })
