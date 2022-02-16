const express = require("express");
const router = express.Router();
const task = require("../controllers/task");

router.get("/api/v1/tasks", task.getTasks);

module.exports = router;
