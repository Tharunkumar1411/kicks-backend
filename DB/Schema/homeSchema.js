const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({}, { strict: false });

const ProductSchema = new mongoose.Schema({}, { strict: false });

const Home = mongoose.model("Home", HomeSchema, 'home');

const Product = mongoose.model("Product", ProductSchema, 'product');

const workflowSchema = new mongoose.Schema({
    flowId: {
      type: String,
      required: true,
      unique: true
    },
    nodes: {
      type: Array,
      default: []
    },
    edges: {
      type: Array,
      default: []
    },
    flowName: {
      type: String,
      required: true
    },
    editedOn: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    description: {
      type: String,
      default: "Some description here regarding the flow.."
    },
    apiConfig: {
      type: mongoose.Schema.Types.Mixed,
      default: null
    }
  }, {
    timestamps: true
});
  
const WorkFlow = mongoose.model('WorkFlow', workflowSchema);

module.exports = { Home, Product, WorkFlow }