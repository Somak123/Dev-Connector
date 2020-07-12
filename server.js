const express = require("express");
const app = express();
const connectDB = require("./config/db");

//Connect DB
connectDB();
app.get("/", (req, res) => {
  res.send("API running!");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
