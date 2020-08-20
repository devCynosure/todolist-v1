const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var whichDay = "";
  if (currentDay === 0 || currentDay === 6) {
    whichDay = "Weekend";
  } else {
    whichDay = "weekday";
  }
  res.render("list", {
    dayIs: whichDay
  });

});

app.listen(port, function() {
  console.log("server running on port " + port);
});
