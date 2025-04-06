const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js");

// Create a new task
router.post("/", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json({ message: "Task added successfully!", task: savedTask });
  } catch (error) {
    res.status(500).json({ error: "Failed to add task" });
  }
});

module.exports = router;
