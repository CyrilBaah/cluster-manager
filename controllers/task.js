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

// Get all task
exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.status(200).json({ message: "tasks", tasks });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
