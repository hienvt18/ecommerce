const mongoose = require("mongoose")


const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const ProductSchema = new mongoose.Schema({
    name: { type: String, require: true},
    description: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true }
}, {timestamps: true})

module.exports = mongoose.model("Product", ProductSchema)