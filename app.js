const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var options ={
    weekday :'long',
    day : 'numeric',
    month : 'long',
    year : 'numeric'
  }
  var whichDay = today.toLocaleDateString("en-IN", options);

  console.log(currentDay);
  console.log(whichDay);


  res.render('list', {
    dayIs: whichDay
  });

});
app.listen(port, function() {
  console.log("server running on port " + port);
});
