import "./index.css";
import { yearEl, inputEl, taskListEl, formEl } from "./domselection";
import Task from "./components/task";

const tasks = [];
function renderTask() {
  taskListEl.innerHTML = "";
  const fragment = document.createDocumentFragment();
  tasks.forEach((task) => {
    const taskEl = Task(task.value, task.iscompleted);
    fragment.appendChild(taskEl);
  });
  taskListEl.appendChild(fragment);
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!inputEl.value) {
    return;
  }
  tasks.unshift({
    id: crypto.randomUUID(),
    value: inputEl.value,
    iscompleted: false,
  });
  console.log(tasks);
  renderTask();

  inputEl.value = "";
});
// yearEl.textContent = `${new Date().getFullYear()}`;

(function renderDate() {
  const year = new Date().getFullYear();
  yearEl.textContent = `${year}`;
})();
