const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

const task = new mongoose.model('Task', schema)

module.exports = task;