const express = require("express");
var router = express.Router();
const HomeApis = require("../api/Home/index")

router.get("/getHomeDetails", HomeApis.getHomePresetDetails);
router.get("/getProductDetails", HomeApis.getProductDetails);

//product
router.get("/getProductList", HomeApis.getProductList)

//product filter
router.get("/getFilterProperties", HomeApis.getFilterProperties);


//workflow routes
router.post("/setWorkflowDetail", HomeApis.setWorkflowDetail);
router.get("/getAllWorkflows", HomeApis.getAllWorkflows);

module.exports = router;