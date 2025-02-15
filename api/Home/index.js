const Home = require('../../DB/Schema/homeSchema');

exports.getHomePresetDetails = async(req, res) => {
    try {
        const homeData = await Home.find();
        res.json(homeData);
    } catch (error) {
        console.log("error", error)
    }
}