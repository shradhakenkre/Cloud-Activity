const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
const taskRoutes = require("./routes/tasks");
app.use("/api/tasks", taskRoutes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "frontend/build")));

// After defining routes, handle requests that don't match any route
app.get('/api/*path', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
