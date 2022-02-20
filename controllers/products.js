const Product = require("../models/product");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "List of products", products, nbHits: products.length });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "created", product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
