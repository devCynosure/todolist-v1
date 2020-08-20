const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
  console.log("server running on port " + port);
});
