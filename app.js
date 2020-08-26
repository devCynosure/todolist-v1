const express = require('express');
const bodyParser = require('body-parser');
const dayFormated = require(__dirname + '/day.js');

const port = 3000;
const app = express();
var items = [];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  var whichDay = dayFormated.dayFormated();

  console.log(whichDay);

  res.render('list', {
    titleToDoList: whichDay,
    itemslist: items
  });
});
app.post("/", function(req, res) {

  let postCheck = req.body.addItemToDoList;
  let item = req.body.itemToDoListTextbox;

  if(postCheck === "Work List"){
    workItems.push(item);
    console.log(req.body);
    res.redirect('/work')
  }
else{

  items.push(item);
  console.log(req.body);
  res.redirect('/');
}

});

app.get("/work", function(req, res) {

  res.render("list", {
    titleToDoList: "Work List",
    itemslist: workItems

  });
});

// app.post("/work",function(req,res){
//   let item = req.body.itemToDoListTextbox;
//   workItems.push(item);
//    res.redirect('/work')
// });

app.listen(port, function() {
  console.log("server running on port " + port);
});
