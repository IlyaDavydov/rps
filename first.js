function getComputerChoice() {
     let r = randomInt(1, 3);
     if (r == 1) {
        return ["rock", 1];
     }
     else if (r == 2) {
        return ["paper", 2];
     }
     else {
        return ["scissors", 3];
     }
}

function randomInt(a, b) {
    return Math.floor(a + Math.random() * b);
}

/*
function playGame() {
    let tempPC = getComputerChoice();
    let tempUSER = getUserChoice()
    let pc = tempPC[0];
    let user = tempUSER[0]; 
    let a = tempPC[1];
    let b = tempUSER[1]; 
    let string;
}

let answer;

do {
    console.log(playGame());
    answer = prompt("If you want to play one time more enter y, otherwise something else");
} while (answer == "y");*/

const rock = document.querySelector(".elements .image.rock");
const paper = document.querySelector(".elements .image.paper");
const scissors = document.querySelector(".elements .image.scissors");
const pcChoice = document.querySelector(".score .image.pc");
const userChoice = document.querySelector(".score .image.user");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result p");
const button = document.querySelector("button");

const tempRock = "url('rock.png')";
const tempPaper = "url('paper.png')";
const tempScissors = "url('scissors.png')";

const tempArr = [];
tempArr.push(tempRock);
tempArr.push(tempPaper);
tempArr.push(tempScissors);

let a = 0; //variable for saving a result of pc choice
let b = 0; //variavle for saving a result of user choice


function pcChoose() {
    let counter = 0;
    let pcVote = getComputerChoice()[1];
    let interval = setInterval(() => {
        if (tempArr[counter % tempArr.length] === tempPaper) {
            pcChoice.style.backgroundPosition = "130% center";
        }
        pcChoice.style.backgroundImage = tempArr[counter % tempArr.length];
        pcChoice.style.backgroundSize = "cover";
        counter++;
        if (counter === 15) {
            clearInterval(interval);
        }
    }, 100);
    console.log(pcVote);
    function mainVote() {
        if (pcVote === 1) {
            pcChoice.style.backgroundImage = tempRock;
            console.log("ROCK");
            a = 1;
        }
        else if (pcVote === 2) {
            pcChoice.style.backgroundImage = tempPaper;
            pcChoice.style.backgroundPosition = "130% center";
            console.log("PAPER");
            a = 2;
        }
        else {
            pcChoice.style.backgroundImage = tempScissors;
            console.log("SCISSORS");
            a = 3;
        }
    }
    setTimeout(mainVote, 1600);
} 

function userChoose(temp) {
    if (temp === "image rock") {
        userChoice.style.backgroundImage = tempRock;
        b = 1;
    }
    if (temp === "image paper") {
        userChoice.style.backgroundImage = tempPaper;
        userChoice.style.backgroundPosition = "130% center";
        b = 2;
    }
    if (temp === "image scissors") {
        userChoice.style.backgroundImage = tempScissors;
        b = 3;
    }
    userChoice.style.backgroundSize = "cover";
}

function game(event) {
    let temp = event.currentTarget.className;
    console.log(temp);
    userChoose(temp);
    pcChoose();
    setTimeout(function() {
        voting(a, b);
    }, 1650);
    setTimeout(function() {
        result.style.display = "flex";
    }, 1700);
}

function reset() {
    userChoice.style.backgroundImage = "url('question.jpg')";
    pcChoice.style.backgroundImage = "url('question.jpg')";
    result.style.display = "none";
    userChoice.style.border = "solid white 2px";
    pcChoice.style.border = "solid white 2px";
}


function voting(a, b) {
    const userArray = ["rock", "paper", "scissors"];
    const pcArray = ["rock", "paper", "scissors"];
    let string = "";
    console.log("a" + a);
    console.log("b" + b);
    if (a == b) {
        string =  `It's a draw, computer choice: ${pcArray[a - 1]}, user choice: ${userArray[b - 1]}`
        resultText.textContent = "IT'S A DRAW! PLAY AGAIN?";
        userChoice.style.border = "solid gold 2px";
        pcChoice.style.border = "solid gold 2px";
    }
    else {
        if (a == 1) {
            if (b == 2) {
                string =  `It's a user win, computer choice: ${pcArray[a - 1]}, user choice: ${userArray[b - 1]}`
                resultText.textContent = "USER WON! PLAY AGAIN?";
                userChoice.style.border = "solid green 2px";
                pcChoice.style.border = "solid red 2px";
            }
            else {
                string =  `It's a PC win, computer choice: ${pcArray[a - 1]}, user choice: ${userArray[b - 1]}`
                resultText.textContent = "PC WON! PLAY AGAIN?";
                userChoice.style.border = "solid red 2px";
                pcChoice.style.border = "solid green 2px";
            }
        }
        else if (a == 2) {
            if (b == 1) {
                string =  `It's a PC win, computer choice: ${pcArray[a - 1]}, user choice: ${userArray[b - 1]}`
                resultText.textContent = "PC WON! PLAY AGAIN?";
                userChoice.style.border = "solid red 2px";
                pcChoice.style.border = "solid green 2px";
            }
            else {
                string =  `It's a user win, computer choice: ${pcArray[a - 1]}, user choice: ${userArray[b - 1]}`
                resultText.textContent = "USER WON! PLAY AGAIN?";
                userChoice.style.border = "solid green 2px";
                pcChoice.style.border = "solid red 2px";
            }
        }
        else {
            if (b == 1) {
                string =  `It's a user win, computer choice: ${pcArray[a - 1]}, user choice: ${userArray[b - 1]}`
                resultText.textContent = "USER WON! PLAY AGAIN?";
                userChoice.style.border = "solid green 2px";
                pcChoice.style.border = "solid red 2px";
            }
            else {
                string =  `It's a PC win, computer choice: ${pcArray[a - 1]}, user choice: ${userArray[b - 1]}`
                resultText.textContent = "PC WON! PLAY AGAIN?";
                userChoice.style.border = "solid red 2px";
                pcChoice.style.border = "solid green 2px";
            }
        }
    }
    console.log(string);
}

rock.addEventListener('click', function(event) {
    game(event);
});

paper.addEventListener('click', function(event) {
    game(event);
});

scissors.addEventListener('click', function(event) {
    game(event);
});

button.addEventListener('click', reset);

