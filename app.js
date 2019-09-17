var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get("*", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server Started");
});
