// Set the date we're counting down to
var countDownDate = new Date("July 10, 2021 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
    var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + " days left till 10th July 2021!";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Thank you for coming!";
  }

  // If there is a bug
  if (isNaN(distance)) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "10th July 2021";
  }
}, 1000);
