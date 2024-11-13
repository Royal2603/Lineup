import "./index.css";
import { yearEl, inputEl, formEl } from "./domselection";
const tasks = [];

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!inputEl.value) {
    return;
  }
  tasks.push({
    title: inputEl.value,
    iscompleted: false,
    id: crypto.randomUUID(),
  });
  console.log(tasks);

  inputEl.value = "";
});
// yearEl.textContent = `${new Date().getFullYear()}`;

(function renderDate() {
  const year = new Date().getFullYear();
  yearEl.textContent = `${year}`;
})();
