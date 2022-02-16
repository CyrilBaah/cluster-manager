const express = require("express");
const router = express.Router();
const task = require("../controllers/task");

router.post("/api/v1/tasks", task.createTask);

module.exports = router;
