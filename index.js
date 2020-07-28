// #3 ................. #4
var randomNumber1 = Math.floor((Math.random() * 6) + 1); //random 1-6
// string to change the src of our images
var randomImage1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - 6
// changes the attritube
// selects the first img tag and sets the attritube
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
// #5
var randomNmber2 = Math.floor((Math.random() * 6) + 1);
var randomImage2 = "images/dice" + randomNmber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

//#6 to change the title depending on the dice roll result
if (randomNumber1 > randomNmber2)
  document.querySelector("h1").innerHTML = "🚩Player1 Wins";
else if (randomNumber1 < randomNmber2)
  document.querySelector("h1").innerHTML = "Player2 Wins🚩";
else
  document.querySelector("h1").innerHTML = "yiDraw 😊";
