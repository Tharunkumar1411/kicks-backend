const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({}, { strict: false });

const Home = mongoose.model("Home", HomeSchema, 'home');

module.exports = Home