const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./DB/index");
const router = require("./routes/index")

app.listen(process.env.PORT, () => console.log(`server start at ${process.env.PORT}`));

app.set("view engine", "ejs");

// Set the directory where EJS files are stored
app.set("views", path.join(__dirname, "views")); // Ensure your EJS files are in a "views" folder

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("staticHome", { title: "Kicks-backend", message: "Welcome to kicks backend sevices" });
});

connectDB();

app.get("*", router)

app.use(express.json())