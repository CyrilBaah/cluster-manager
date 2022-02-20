const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Product price must be provided"],
  },
  featured: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
      type: String,
      required: true,
    //   enum: {
    //       values: ['ikea', 'liddy', 'caressa', 'marcos'],
    //       message: '{VALUE} is not supported'
    //   }
  }
});

const store = new mongoose.model("Store", schema);

module.exports = store;

// name
// price
// company
