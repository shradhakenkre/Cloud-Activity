const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve static files
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('DB Error:', err));

// Routes
const taskRoutes = require('./routes/tasks'); // Note: 'tasks' not 'task'
app.use('/tasks', taskRoutes);

// Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
