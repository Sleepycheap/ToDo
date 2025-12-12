import "./style.css"
import { createTask, getTaskName, clearTask, loadPage, createProject, getDetailsStart, closeDetails, displayToday, displayInbox } from "./Utils/tasks.js";

// const clear = document.querySelector('.clear-task');
// const card = document.querySelector('.prj-card');
// const name = card.textContent;
// const ul = document.querySelector('#projects-list');
// const li = document.querySelector('#projects-card');

createTask();
loadPage();

const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const important = document.querySelector('#important');
inbox.addEventListener('click', (e) => {
  e.preventDefault();
  displayInbox();
})

today.addEventListener('click', (e) => {
  e.preventDefault();
  displayToday();
})

important.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('important');
})

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
