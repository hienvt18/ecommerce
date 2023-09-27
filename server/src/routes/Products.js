const express = require('express')
const router = express.Router()

const productController = require("../controller/ProductController")

router.delete("/:productId", productController.deleteProduct)
router.put("/:productId", productController.updateProduct)
router.post("/create", productController.createProduct)
router.get("/:slug", productController.showProduct)
router.get("/", productController.getAllProducts)

module.exports = router