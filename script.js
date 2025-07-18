function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice == 1) {
    return (choice = "rock");
  } else if (choice == 2) {
    return (choice = "paper");
  } else {
    return (choice = "scissors");
  }
}

function getHumanChoice() {
  let choice = prompt("Pick a side:");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "paper") {
      alert("You lose! paper beats rocks");
      return computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      alert("You win! paper beats rock");
      return humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      alert("You win! rocks beats scissors");
      return humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      alert("You lose! rock beats scissors");
      return computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      alert("You lose! scissors beats paper");
      return computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      alert("You win! scissors beats paper");
      return humanScore++;
    } else {
      alert("Draw!");
    }
  }


  for (let i = 0; i < 5; i++) {
    round++;
    alert(`Round: ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  alert(`Your score is: ${humanScore}
Computer score is: ${computerScore}`);
  alert(humanScore > computerScore ? `YOU WIN` : humanScore === computerScore ? `A TIE` : `YOU LOSE`);
}

playGame();
