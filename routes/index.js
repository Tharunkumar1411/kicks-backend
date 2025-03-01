const express = require("express");
var router = express.Router();
const HomeApis = require("../api/Home/index")

router.get("/getHomeDetails", HomeApis.getHomePresetDetails);
router.get("/getProductDetails", HomeApis.getProductDetails);

//product
router.get("/getProductList", HomeApis.getProductList)

//product filter
router.get("/getFilterProperties", HomeApis.getFilterProperties);

module.exports = router;