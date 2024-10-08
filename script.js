function getComputerChoice() {
    let getRandomNum = Math.floor(Math.random() * 3);

    if (getRandomNum == 0) {
        return("rock");
    } else if (getRandomNum == 1) {
        return("paper");
    } else {
        return("scissors");
    }

}

function getHumanChoice() {
    let question = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (question == "rock") {
        return("rock");
    }   else if (question == "paper") {
        return("paper");
    } else if (question == "scissors") {
        return("scissors");
    } else {
        return("invalid input");
    }
    return question;
}



function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        console.log(`Round ${i + 1}: Computer chose ${computerChoice}, Human chose ${humanChoice}`);

        if (humanChoice === computerChoice) {
            console.log("Draw!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("Human wins this round!");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Human wins this round!");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Human wins this round!");
            humanScore++;
        } else {
            console.log("Computer wins this round!");
            computerScore++
        }

    }

    if (humanScore > computerScore) {
        console.log(`Human Score:${humanScore} vs Computer Score:${computerScore} -- You won the rock-paper-scissors contest!`);
    }   else if (humanScore < computerScore) {
        console.log(`Computer Score:${computerScore} vs Human Score:${humanScore} -- Computer won the rock-paper-scissors contest`);
    } else {
        console.log("It's a tie after 5 rounds");
    }

}

playGame();

