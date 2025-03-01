const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./DB/index");
var bodyParser = require('body-parser');
const router = require("./routes/index")
const cors = require("cors")

app.listen(process.env.PORT, () => console.log(`server start at ${process.env.PORT}`));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors({ credentials: true, origin: "*" }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("staticHome", { title: "Kicks-backend", message: "Welcome to kicks backend sevices" });
});

connectDB();

app.get("*", router)

app.use(express.json())