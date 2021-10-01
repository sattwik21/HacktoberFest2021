// FOR FIRST IMAGE
var randomNumber1 = (Math.floor(Math.random()*6))+1;

var newLocation = "./images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", newLocation);


// FOR SECOND IMAGE
var randomNumber2 = (Math.floor(Math.random()*6))+1;

var newLocation2 = "./images/dice" + randomNumber2 + ".png";

var img1 = document.querySelectorAll("img")[1];

img1.setAttribute("src", newLocation2);


//DISPLAY WINNER
var winner = document.getElementsByTagName("h1")[0];

if(randomNumber1 > randomNumber2) {
    winner.innerHTML = "⛳Player 1 wins";
} else if(randomNumber1 == randomNumber2) {
    winner.innerHTML = "Match Draw!!"
} else {
    winner.innerHTML = "Player 2 wins⛳";
}