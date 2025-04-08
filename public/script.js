const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');

const API_BASE = 'http://localhost:3000/tasks';

// Fetch and display tasks
async function loadTasks() {
  const res = await fetch(API_BASE);
  const tasks = await res.json();

  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.title} - ${task.description}`;
    
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = async () => {
      await fetch(`${API_BASE}/${task._id}`, { method: 'DELETE' });
      loadTasks();
    };
    
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Add task
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  await fetch(API_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description })
  });

  taskForm.reset();
  loadTasks();
});

loadTasks();
