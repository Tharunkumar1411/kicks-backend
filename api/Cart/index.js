const { Cart } = require("../../DB/Models/productModels");

exports.updateCart = async(req, res) => {
    try {
        console.log("req.body", req.body)
        const homeData = await Cart.update(req.body);
        res.json(homeData);
    } catch (error) {
        console.log("error", error)
    }
}