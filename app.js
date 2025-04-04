const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./DB/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");

dotenv.config();
connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Correct CORS setup — use only once, before routes
app.use(cors({
  origin: "http://localhost:3000", // or your frontend domain
  credentials: true,
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// ✅ Use proper router
app.use("/", router);
// // Home route
// app.get("/", (req, res) => {
//   res.render("staticHome", {
//     title: "Kicks-backend",
//     message: "Welcome to kicks backend services"
//   });
// });

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
