const express = require("express");
const router = express.Router();
const products = require('../controllers/products')


router.get("/api/v1/products", products.getAllProducts);
router.get("/api/v1/products", products.getAllProducts);
router.put("/api/v1/products")

module.exports = router;
