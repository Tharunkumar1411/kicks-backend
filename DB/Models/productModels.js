import mongoose from "mongoose";
import { UserSchema } from "../Schema/userSchema.js";

const HomeSchema = new mongoose.Schema({}, { strict: false });
const ProductSchema = new mongoose.Schema({}, { strict: false });

const User = mongoose.model("User", UserSchema, "user");
const Home = mongoose.model("Home", HomeSchema, "home");
const Product = mongoose.model("Product", ProductSchema, "product");

const workflowSchema = new mongoose.Schema(
  {
    flowId: { type: String, required: true, unique: true },
    nodes: { type: Array, default: [] },
    edges: { type: Array, default: [] },
    flowName: { type: String, required: true },
    editedOn: { type: String },
    name: { type: String },
    description: {
      type: String,
      default: "Some description here regarding the flow..",
    },
    apiConfig: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

const WorkFlow = mongoose.model("WorkFlow", workflowSchema);

export { User, Home, Product, WorkFlow };
