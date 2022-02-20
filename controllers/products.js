const Store = require("../models/store");

// Get all products
exports.getAllProducts = (req, res) => {
  res.json("All products");
};

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const product = await Store.create(req.body);
    res.status(201).json({ message: "created", product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
