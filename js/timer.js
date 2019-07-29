// Set the date we're counting down to
var countDownDate = new Date("August 1, 2020 6:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + " days left till August 1st 2020!";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Thank you for coming!";
  }
}, 1000);
