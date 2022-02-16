const express = require("express");
const router = express.Router();
const task = require("../controllers/task");

router.post("/api/v1/tasks", task.createTask);
router.get("/api/v1/tasks", task.getAllTasks);
router.get("/api/v1/tasks", task.getSingleTask);


module.exports = router;
