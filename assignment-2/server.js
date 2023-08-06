const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
  console.log("This is the users route");
  res.send("This is the users route, welcome");
});

app.use("/", (req, res, next) => {
  console.log("this is the root route");
  res.send("This is the root route, welcome");
});

app.listen(3000);
