const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.PORT, () => console.log(`server start at ${process.env.PORT}`));

app.get("/", (req, res) => {
    res.send("server running")
})