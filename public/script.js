const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

const API = "/api/tasks";

const fetchTasks = async () => {
  const res = await fetch(API);
  const tasks = await res.json();
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;
    list.appendChild(li);
  });
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = input.value;
  if (!title) return;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  input.value = "";
  fetchTasks();
});

window.onload = fetchTasks;
