const express = require("express");
const router = express.Router();

router.get("/api/v1/tasks", (req, res) => {
    res.send('all items')
})

module.exports = router;
