var input1 = prompt("please enter your number"); // Takes user input with the prompt command
var topNumber = parseInt(input1);	//Parses the number from user to an interteger
var randomNumber = Math.floor(Math.random() * topNumber) + 1; // Math.floor drops number to lowest near interger.
// +1 makes sure the lowest number is 1

//declare output message variable
var message = "<p>" + randomNumber + "  is a number between 1 and " + topNumber + ."</p>";
document.write(message);