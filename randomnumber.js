
var randomNumber = Math.floor(Math.random() * 6 ) +1;
var guess = prompt("Pick a number between one and six");

var correctImg = document.createElement('img');
correctImg.setAttribute('src','img/ghost.png');

var incorrectImg = document.createElement('img');
incorrectImg.setAttribute('src','img/incorrect.png');


if (parseInt(guess) === randomNumber)	{
	
  	document.write('<p>Good guess! :)</p> <br>');
  	document.querySelector('p').appendChild(correctImg);
}
else {
	
  	document.write('<p>Nope, wrong number. The number was ' + randomNumber + '<br>');
  	document.querySelector('p').appendChild(incorrectImg);
}


//var myImage = document.createElement('img');
//myImage.setAttribute('src','https://farm4.staticflickr.com/3455/3372925208_e1f2aae4e3_b.jpg');
//document.querySelector('h1').appendChild(myImage);