const express = require("express");
var router = express.Router();
const HomeApis = require("../api/Home/index")
const WorkflowApis = require("../api/Workflow/index");

router.get("/getHomeDetails", HomeApis.getHomePresetDetails);
router.get("/getProductDetails", HomeApis.getProductDetails);

//product
router.get("/getProductList", HomeApis.getProductList)

//product filter
router.get("/getFilterProperties", HomeApis.getFilterProperties);


//workflow routes
router.post("/setWorkflowDetail", WorkflowApis.setWorkflowDetail);
router.get("/getAllWorkflows", WorkflowApis.getAllWorkflows);

module.exports = router;