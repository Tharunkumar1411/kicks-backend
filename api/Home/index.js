const {Home, Product} = require('../../DB/Schema/homeSchema');

exports.getHomePresetDetails = async(req, res) => {
    try {
        const homeData = await Home.find();
        res.json(homeData);
    } catch (error) {
        console.log("error", error)
    }
}

exports.getProductDetails = async(req, res) => {
    try {
        const queryParams = req.query;
        const productData = await Product.findOne({productId: queryParams?.productId});
        res.json(productData);
    } catch (error) {
        console.log("error", error)
    }
}

exports.getProductList = async(req, res) => {
    try {
        const productList = await Product.find({});
        res.json(productList);
    } catch (error) {
        console.log("error", error)
    }
}