const express = require("express");
var router = express.Router();
const CartApis = require("../api/Cart/index")
const HomeApis = require("../api/Home/index")
const AuthApis = require("../api/Auth/index")
const WorkflowApis = require("../api/Workflow/index");

//auth
router.post("/create/user", AuthApis.createUser);


router.get("/getHomeDetails", HomeApis.getHomePresetDetails);
router.get("/getProductDetails", HomeApis.getProductDetails);

//product
router.get("/getProductList", HomeApis.getProductList)

//cart routes
router.put("/cart/update", CartApis.updateCart);

//product filter
router.get("/getFilterProperties", HomeApis.getFilterProperties);


//workflow routes
router.post("/setWorkflowDetail", WorkflowApis.setWorkflowDetail);
router.get("/getAllWorkflows", WorkflowApis.getAllWorkflows);

module.exports = router;