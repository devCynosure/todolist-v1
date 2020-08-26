
module.exports.dayFormated = function() {

let day = new Date();

let today = day.getDate();

let dateFormatingOption =  {
  weekday : "long",
  day : "2-digit",
  month : "long",
  year : "2-digit"
}

let currentDay = day.toLocaleDateString("en-IN",dateFormatingOption);
console.log(currentDay);
return currentDay;
};
