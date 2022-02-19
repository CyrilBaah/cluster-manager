const express = require("express");
const router = express.Router();
const task = require("../controllers/tasks");

router.post("/api/v1/tasks", task.createTask);
router.get("/api/v1/tasks", task.getAllTasks);
router.get("/api/v1/tasks/:id", task.getSingleTask);
router.delete("/api/v1/tasks/:id", task.deleteTask);
router.put("/api/v1/tasks/:id", task.updateTask);


module.exports = router;
