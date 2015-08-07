var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var dayPerWeek = 7;
var weekPerYear = 52;

var secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
//document.write(secondsPerDay + " Seconds per day");

var age = prompt("What is your age?");
var yearsAlive = age * weekPerYear * dayPerWeek;
document.write("You have been alive for " + yearsAlive + " days. Good job!!");