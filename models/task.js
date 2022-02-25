const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
    trim: true,
    maxlength: [50, "name cannot exceed 20 characters"]
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const task = new mongoose.model('Task', schema)

module.exports = task;