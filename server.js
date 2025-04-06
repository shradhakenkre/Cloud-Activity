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

// After defining API routes, handle requests that don't match any API route
// This should be placed after all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
