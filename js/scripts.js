// business logic for Places
var rockyHorror = new times("4pm", "12am")
var conanTheBarbarian = new times("2pm", "8pm")
var thePrincessBride= new time("12pm","10pm")
var theDarkCrystal = new time("3pm","9:30pm")

function places(country, landmark, activity) {
  this.country = country,
  this.landmark = landmark,
  this.activity = activity
}

places.prototype.totalInfo = function() {
return "<li>" + "Country: " + this.country + "</li>" + "<li>" + "Landmark: " + this.landmark + "</li>" + "<li>" + "Activity: " + this.activity + "</li>";
}

// Place.forEach(function(place) {
//   console.log(this.country + this.landmark);
//   console.log("\n");
// });

// user interface logic

$(function() {
  $("#portland").click(function() {
    $("#portlandHidden").html(portland.totalInfo());
    $("#portlandHidden").toggle();
  });
  $("#kyoto").click(function() {
    $("#kyotoHidden").html(kyoto.totalInfo());
    $("#kyotoHidden").toggle();
  });
  $("#bordeaux").click(function() {
    $("#bordeauxHidden").html(bordeaux.totalInfo());
    $("#bordeauxHidden").toggle();
  });
});
