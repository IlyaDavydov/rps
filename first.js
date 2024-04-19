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

function getUserChoice() {
    let userChoice = prompt("Enter your choice")
    if (userChoice.toLowerCase() == "rock") {
        return ["rock", 1];
    }
    else if (userChoice.toLowerCase() == "paper") {
        return ["paper", 2];
    }
    else if (userChoice.toLowerCase() == "scissors") {
        return ["scissors", 3];
    }
    else {
        alert("sorry, use a correct value for this game");
        return getUserChoice();
    }
}

function playGame() {
    let tempPC = getComputerChoice();
    let tempUSER = getUserChoice()
    let pc = tempPC[0];
    let user = tempUSER[0]; 
    let a = tempPC[1];
    let b = tempUSER[1]; 
    let string;
    if (a == b) {
        string =  `It's a draw, computer choice: ${pc}, user choice: ${user}`
    }
    else {
        if (a == 1) {
            if (b == 2) {
                string =  `It's a user win, computer choice: ${pc}, user choice: ${user}`
            }
            else {
                string =  `It's a PC win, computer choice: ${pc}, user choice: ${user}`
            }
        }
        else if (a == 2) {
            if (b == 1) {
                string =  `It's a PC win, computer choice: ${pc}, user choice: ${user}`
            }
            else {
                string =  `It's a user win, computer choice: ${pc}, user choice: ${user}`
            }
        }
        else {
            if (b == 1) {
                string =  `It's a user win, computer choice: ${pc}, user choice: ${user}`
            }
            else {
                string =  `It's a PC win, computer choice: ${pc}, user choice: ${user}`
            }
        }
    }
    return string;
}

function randomInt(a, b) {
    return Math.floor(a + Math.random() * b);
}

let answer;

do {
    console.log(playGame());
    answer = prompt("If you want to play one time more enter y, otherwise something else");
} while (answer == "y");

