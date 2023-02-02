// get the time from the user when counters end

// Timers end at (var countDownDate)
var countDownDate = new Date("Jan 17, 2023 23:58:00").getTime(); 
console.log(countDownDate);

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();// Timer starts with the current time.
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    console.log(distance);
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    // console.log( days + "day " + hours + "hour's "+ minutes + "minutes " + seconds + "seconds left");
    console.log(` ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left`)
      
    // If the count down is over, write some text 
    if (distance < 0) {
        console.log( "EXPIRED");
      clearInterval(x);
    }
  }, 1000);
