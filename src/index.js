import "./style.css"
import { createTask, getTaskName, clearTask, loadPage, createProject } from "./Utils/tasks.js";

const button = document.querySelector('.clear-task');
const card = document.querySelector('#task-card');

createTask();
createProject();
// getTaskName();
// clearTask(button, card);
