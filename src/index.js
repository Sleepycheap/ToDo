import "./style.css"
import { createTask, getTaskName, clearTask, loadPage } from "./Utils/tasks.js";

const button = document.querySelector('.clear-task');
const card = document.querySelector('#task-card');

createTask();
// getTaskName();
// clearTask(button, card);
