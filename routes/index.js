const express = require("express");
var router = express.Router();
const HomeApis = require("../api/Home/index")

router.get("/", HomeApis.getHomePresetDetails);

module.exports = router;