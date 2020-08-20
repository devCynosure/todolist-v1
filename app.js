const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var whichDay = "";
  console.log(currentDay);
  switch (currentDay) {
    case 0:
      whichDay = "Sunday";
      break;
    case 1:
      whichDay = "Monday";
      break;
    case 2:
      whichDay = "Tuesday";
      break;
    case 3:
      whichDay = "Wednessday";
      break;
    case 4:
      whichDay = "Thusday";
      break;
    case 5:
      whichDay = "Friday";
      break;
    case 6:
      whichDay = "Saturday";
      break;
    default:
      whichDay = "Error Occured!";
  }
  res.render('list', {
    dayIs: whichDay
  });

});
app.listen(port, function() {
  console.log("server running on port " + port);
});
