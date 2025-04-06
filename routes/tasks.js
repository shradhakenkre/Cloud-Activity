const express = require("express");
const router = express.Router();
const Task = require("./models/Task.js");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// Get task by ID
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch task by ID" });
  }
});

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

// Update a task
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
