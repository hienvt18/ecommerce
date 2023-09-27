const Product = require("../models/Product")

const productController = {
    // GET ALL
    getAllProducts: async (req, res) => {
        try {
            const product = await Product.find()
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A PRODUCT BY SLUG
    showProduct: async (req, res) => {
        try {
            const product = await Product.findOne({ slug: req.params.slug })
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // CREATE PRODUCT
    createProduct: async (req, res) => {
        const newProduct = new Product(req.body)
        try {
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    updateProduct: async (req, res) => {
        try {
            const updateProduct = await Product.updateOne(req.params._id, req.body);
            res.status(200).json(updateProduct);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const deletedProduct = await Product.deleteOne(req.params._id);
            res.status(200).json(deletedProduct);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = productController