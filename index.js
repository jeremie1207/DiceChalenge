var numberPlayer1 = Math.floor(Math.random() * 6) + 1;
var numberPlayer2 = Math.floor(Math.random() * 6) + 1;


var imagePlayer1 = document.querySelector('.img1');
var imagePlayer2 = document.querySelector('.img2');


// Player 1
if (numberPlayer1 == 1){
    imagePlayer1.setAttribute("src", "images/dice1.png");
}
else if(numberPlayer1 == 2){
    imagePlayer1.setAttribute("src", "images/dice2.png");
}
else if(numberPlayer1 == 3){
    imagePlayer1.setAttribute("src", "images/dice3.png");
}
else if(numberPlayer1 == 4){
    imagePlayer1.setAttribute("src", "images/dice4.png");
}
else if(numberPlayer1 == 5){
    imagePlayer1.setAttribute("src", "images/dice5.png");
}
else if(numberPlayer1 == 6){
    imagePlayer1.setAttribute("src", "images/dice6.png");
}

//Player 2 
if (numberPlayer2 == 1){
    imagePlayer2.setAttribute("src", "images/dice1.png");
}
else if(numberPlayer2 == 2){
    imagePlayer2.setAttribute("src", "images/dice2.png");
}
else if(numberPlayer2 == 3){
    imagePlayer2.setAttribute("src", "images/dice3.png");
}
else if(numberPlayer2 == 4){
    imagePlayer2.setAttribute("src", "images/dice4.png");
}
else if(numberPlayer2 == 5){
    imagePlayer2.setAttribute("src", "images/dice5.png");
}
else if(numberPlayer2 == 6){
    imagePlayer2.setAttribute("src", "images/dice6.png");
}


if (numberPlayer1 === numberPlayer2){
    document.querySelector('h1').innerText = 'draw ! 🤝';
}
else if (numberPlayer1 > numberPlayer2){
    document.querySelector('h1').innerText = 'Player 1 win !🚩';
}
else{
    document.querySelector('h1').innerText = '🚩Player 2 win !';
}

