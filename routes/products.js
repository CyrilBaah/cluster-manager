const express = require("express");
const router = express.Router();
const products = require("../controllers/products");

// router.get("/api/v1/products", products.getAllProducts);
router.post("/api/v1/products", products.createProduct);
router.get("/api/v1/products/", products.searchProduct);


module.exports = router;
