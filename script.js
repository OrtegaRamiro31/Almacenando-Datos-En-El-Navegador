import { addTask  } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";
import { currentDate } from "./services/date.js";

const btn = document.querySelector('[data-form-btn]');
//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

currentDate();
displayTasks();