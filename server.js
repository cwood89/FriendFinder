// Dependencies
var express = require("express");
var path = require("path");
// set up express server
var app = express();
var PORT = process.env.PORT || 3000;
// for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
// start server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});