const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
