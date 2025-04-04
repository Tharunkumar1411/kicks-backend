const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({}, { strict: false });

const ProductSchema = new mongoose.Schema({}, { strict: false });

const Home = mongoose.model("Home", HomeSchema, 'home');

const Product = mongoose.model("Product", ProductSchema, 'product');

const workflowSchema = new mongoose.Schema({
    name: String,
    timestamp: String,
    nodes: Array,
    edges: Array,
    apiConfig: Object,
}, {
timestamps: true,
});
  
const WorkFlow = mongoose.model('WorkFlow', workflowSchema);

module.exports = { Home, Product, WorkFlow }