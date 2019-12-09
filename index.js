// Player choice

function pcQuestion () {
    document.getElementById("computerImg").className = "far fa-question-circle fa-9x";
}

function decisionRock () {
    document.getElementById("playerImg").className = mountainImg;
    playerSelection = "Rock";
    pcQuestion ();
}

function decisionPaper () {
    document.getElementById("playerImg").className = paperImg;
    playerSelection = "Paper";
    pcQuestion ();

}

function decisionScissors () {
    document.getElementById("playerImg").className = scissorsImg;
    playerSelection = "Scissors";
    pcQuestion ();
}

// // set the value of the player's hand
// var playerSelection = (rockBoolean ? "Rock" : "") + (scissorsBoolean ? "Scissors" : "") + (paperBoolean ? "Paper" : "");
// // Boolean check to determine radio butt. choice
// var rockBoolean = document.getElementById("rock").checked;
// var paperBoolean = document.getElementById("paper").checked;
// var scissorsBoolean = document.getElementById("scissors").checked;

// // write playerSelection based on radio butt. choice
// function playerChoice () {
//     if (rockBoolean === true) {
//         playerSelection = "Rock";
//     } else if (paperBoolean === true) {
//         playerSelection = "Paper";
//         } else if (scissorsBoolean === true ) {
//             playerSelection = "Scissors";
//         }
// }


// pc choice

//Array of choices
var pcChoiceArray = ["Rock", "Paper", "Scissors"];
var pcSelection = "";
// rand. num and pcChoice assigment
function pcChoice () {
console.log(pcSelection = pcChoiceArray[Math.floor(Math.random() * 3)]);
}

// results section

// Match selections and direct to results calculator
function results (selection) {
        if (playerSelection === pcSelection) {
       document.querySelector("h1").innerText = "Draw! Try again.";
            }
    else if (selection === "Rock")  {
        console.log("rock fight");
        rockFight ();
    }
    else if (selection === "Paper") {
        console.log("paper fight");
        paperFight ();
    }
    else {
        console.log("Scissor fight");
        scissorFight ();
    }
}

// fight resolver

var winText = "Player 1 wins 😄";
var loseText = "Player 1 loses 😥";


function rockFight () {
    if (pcSelection === "Paper") {
   document.querySelector("h1").innerText = loseText;
    } else {
        document.querySelector("h1").innerText = winText;
    }
}

function paperFight () {
    if (pcSelection === "Rock") {
document.querySelector("h1").innerText = winText;
    } else {
document.querySelector("h1").innerText = loseText;
    }
}

function scissorFight () {
    if (pcSelection === "Rock") {
       document.querySelector("h1").innerText = loseText;
    } else {
        document.querySelector("h1").innerText = winText;
    }
}

// player radio selection image update

//fontawesome images class codes
var mountainImg = "fas fa-mountain fa-9x";
var paperImg = "fas fa-toilet-paper fa-9x";
var scissorsImg = "fas fa-hand-scissors fa-9x" ;


//Computer image selection
function pcImg () {
    document.getElementById("computerImg").className =  (pcSelection === "Rock" ? mountainImg : "")  + (pcSelection === "Scissors" ? scissorsImg : "") + (pcSelection === "Paper" ? paperImg : "");
}

//Complete the all processes

function doBattle () {
    pcChoice ();
    console.log("players weapon = " +playerSelection  + "Pc weapon = "+ pcSelection);
    pcImg ();
    results (playerSelection);

}
