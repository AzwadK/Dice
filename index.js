function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


var random = getRandomInt(1, 7);
var random2 = getRandomInt(1, 7);

function p1() {
  if (random === 1) {

    document.querySelector(".img1").src = "images/dice1.png";

  }

  if (random === 2) {

    document.querySelector(".img1").src = "images/dice2.png";


  }

  if (random === 3) {


    document.querySelector(".img1").src = "images/dice3.png";

  }

  if (random === 4) {


    document.querySelector(".img1").src = "images/dice4.png";

  }

  if (random === 5) {


    document.querySelector(".img1").src = "images/dice5.png";

  }


  if (random === 6) {


    document.querySelector(".img1").src = "images/dice6.png";

  }
}

function p2() {
  if (random2 === 1) {

    document.querySelector(".img2").src = "images/dice1.png";

  }

  if (random2 === 2) {

    document.querySelector(".img2").src = "images/dice2.png";


  }

  if (random2 === 3) {


    document.querySelector(".img2").src = "images/dice3.png";

  }

  if (random2 === 4) {


    document.querySelector(".img2").src = "images/dice4.png";

  }

  if (random2 === 5) {


    document.querySelector(".img2").src = "images/dice5.png";

  }

  if (random2 === 6) {


    document.querySelector(".img2").src = "images/dice6.png";

  }
}

function winner(){

  if(random>random2){

    document.querySelector("h1").innerHTML = "Player 1 Wins!!";

  }
  else if(random === random2){

    document.querySelector("h1").innerHTML = "Its a Draw!";

  }
  else{

    document.querySelector("h1").innerHTML = "Player 2 Wins!!";

  }

}

function  combfunc(){

  random = getRandomInt(1, 7);
  random2 = getRandomInt(1, 7);
  p1();
  p2();
  winner();

}
