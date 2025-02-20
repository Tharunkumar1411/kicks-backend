const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({}, { strict: false });

const ProductSchema = new mongoose.Schema({}, { strict: false });

const Home = mongoose.model("Home", HomeSchema, 'home');

const Product = mongoose.model("Product", ProductSchema, 'product');

module.exports = { Home, Product }