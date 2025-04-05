const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.status(201).json(task);
});

router.post('/', async (req, res) => {
  console.log('Received new task:', req.body); // 🔍 Add this log
  try {
      const newTask = new Task({ title: req.body.title });
      const savedTask = await newTask.save();
      res.status(201).json(savedTask);
  } catch (err) {
      console.error('Error saving task:', err); // 🔥 Add this log
      res.status(500).json({ message: err.message });
  }
});


module.exports = router;
