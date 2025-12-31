const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./DB/index");
const router = require("./routes/index");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "http://localhost:8081",
      "https://kicks-app-two.vercel.app"
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection failed", err);
    return res.status(500).json({ message: "Database connection error" });
  }
});

app.use("/api", router);

app.get("/", (req, res) => {
  res.json({
    service: "kicks-backend",
    status: "running"
  });
});
// app.listen(4000, () => {
//   console.log(`Local server running on http://localhost:${4000}`);
// });
module.exports = app;
