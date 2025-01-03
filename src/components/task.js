export default function Task(content, checked) {
  const label = document.createElement("label");
  label.className =
    "label cursor-pointer " + (checked && "bg-zinc-300 rounded");

  const span = document.createElement("span");
  span.className = "label-text";
  span.textContent = content;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.className = "checkbox";

  label.appendChild(span);
  label.appendChild(input);
  return label;
}

/* <label class="label cursor-pointer bg-zinc-300 rounded">
<span class="label-text">Completed Task</span>
<input type="checkbox" checked />
</label> */
