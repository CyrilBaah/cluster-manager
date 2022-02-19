const express = require("express");
const router = express.Router();
const stores = require('../controllers/stores')


router.get("/api/v1/stores", stores.getAllProducts);

module.exports = router;
