var randomNumber = Math.floor(Math.random() * 6 ) +1;
var guess = prompt("Pick a number between one and six");
if (parseInt(guess) === randomNumber)	{
  document.write('<p>Good guess! :)</p>');
}
else {
  document.write('<p>Nope, wrong number. The number was ' + randomNumber);
}