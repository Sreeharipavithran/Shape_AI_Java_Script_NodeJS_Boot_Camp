const express = require("express");
const bopa = require("body-parser");
const exp = express();
const port = 8080;

exp.use(bopa.urlencoded({ extended: true }));

exp.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
exp.post("/", function (req, res) {
  var age = Number(req.body.n1 / 15);
  res.send("Your age in Dog Years is : " + age + "Dog Years");
});

exp.listen(port);
