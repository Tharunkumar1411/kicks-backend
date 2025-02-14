var mongoose = require('mongoose');
const HomeSchema = require("../../DB/Schema/homeSchema");

exports.getHomePresetDetails = async(req, res) => {
    try {
        const homeData = await HomeSchema.find();
        res.json(homeData);
    } catch (error) {
        console.log("error", error)
    }
}