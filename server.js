const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory database
let tasks = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Build a REST API', completed: false }
];

// 1. GET all tasks
app.get('/api/tasks', (req, res) => {
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
});

// 2. GET a single task by ID
app.get('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }
    res.status(200).json({ success: true, data: task });
});

// 3. POST a new task
app.post('/api/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ success: false, message: 'Please provide a task title' });
    }
    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json({ success: true, data: newTask });
});

// 4. PUT (Update) an existing task
app.put('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }
    
    task.title = req.body.title || task.title;
    if (req.body.completed !== undefined) {
        task.completed = req.body.completed;
    }
    
    res.status(200).json({ success: true, data: task });
});

// 5. DELETE a task
app.delete('/api/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }
    
    tasks.splice(taskIndex, 1);
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
});
