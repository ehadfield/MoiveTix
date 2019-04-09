// business logic for Places
var rockyHorror = new movieTix("4pm", "12am")
var conanTheBarbarian = new movieTix("2pm", "8pm")
var thePrincessBride = new movieTix("12pm","10pm")
var theDarkCrystal = new movieTix("3pm","9:30pm")

function movieTix(firstShowing, secondShowing) {
  this.firstShowing = firstShowing,
  this.secondShowing = secondShowing;
  // this.priceByTime();
  // this.priceByAge();

}

movieTix.prototype.timeList = function() {
return "<li>" + "First Showing: " + this.firstShowing + "</li>" + "<li>" + "Second Showing: " + this.secondShowing + "</li>";
}

// Place.forEach(function(place) {
//   console.log(this.country + this.landmark);
//   console.log("\n");
// });

function showTicket(priceByAge){

}

// user interface logic

function timesListeners() {
  $("ul#rockyHorrorHidden").on("click", "li", function() {
    showTicket();
  });
});

$(function() {
  $("#btn1").click(function() {
    $("#rockyTimesHidden").html(rockyHorror.timeList());
  });
  $("#btn2").click(function() {
    $("#conanTimesHidden").html(conanTheBarbarian.timeList());
  });
  $("#btn3").click(function() {
    $("#princessTimesHidden").html(thePrincessBride.timeList());
  });
  $("#btn4").click(function() {
    $("#darkTimesHidden").html(theDarkCrystal.timeList());
  });
});
