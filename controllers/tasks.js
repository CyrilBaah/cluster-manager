const Task = require("../models/task");

// Create a task
exports.createTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(201).json({ message: "created", tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ message: "tasks", tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get a single task
exports.getSingleTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${taskId}` });
    }
    res.status(200).json({ message: "task", task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Update a task
exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${taskId}` });
    }
    res.status(200).json({ message: `Task with id:${taskId} is updated`, task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Delete a task by id
exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${taskId}` });
    }
    res.status(200).json({ message: `Task with id:${taskId} is deleted` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
