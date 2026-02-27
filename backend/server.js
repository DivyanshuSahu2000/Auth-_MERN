// const express = require("express");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connecteed");
});

app.get("/", (req, res) => {
  res.send("ready");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
