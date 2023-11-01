const express = require("express");
const router = express.Router();


const {
  getAllProductTesting,
  getAllProducts,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductTesting);

module.exports = router;
