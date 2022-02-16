const Task = require('../models/task')

// Create a task
exports.createTask = async (req, res) => {
    const tasks = await Task.create(req.body);
    res.status(201).json({message: "created", tasks})
}