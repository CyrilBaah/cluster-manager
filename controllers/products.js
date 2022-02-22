const Product = require("../models/product");

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "created", product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "List of products", products, nbHits: products.length });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get product by search [name, featured, company]
exports.searchProduct = async (req, res) => {
  try {
    const { featured, name, company, sort, fields } = req.query;
    const queryObject = {};

    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    if (company) {
      queryObject.company = company;
    }

    let result = Product.find(queryObject);
    if (sort) {
      const sortList = sort.split(",").join(" ");
      result = result.sort(sortList);
    } else {
      result = result.sort("createdAt");
    }

    if (fields) {
      const fieldsList = fields.split(",").join(" ");
      result = result.select(fieldsList);
    }

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
