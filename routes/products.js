const express = require("express");
const router = express.Router();
const products = require('../controllers/products')


router.get("/api/v1/products", products.getAllProducts);
router.get("/api/v1/products", products.getAllProducts);
router.post("/api/v1/products", products.createProduct)

module.exports = router;
