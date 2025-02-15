const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./DB/index");
const router = require("./routes/index")

app.listen(process.env.PORT, () => console.log(`server start at ${process.env.PORT}`));

connectDB();

app.get("*", router)

app.use(express.json())