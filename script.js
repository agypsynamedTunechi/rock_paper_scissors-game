const container = document.createElement("div");
const rBtn = document.createElement("button");
const pBtn = document.createElement("button");
const sBtn = document.createElement("button");
const scoreBoard = document.createElement("div");
const human = document.createElement("p");
const computer = document.createElement("p");
const text = document.createElement("p");


rBtn.textContent = "Rock";
pBtn.textContent = "Paper";
sBtn.textContent = "Scissors";
human.textContent = `Your Score: 0`;
computer.textContent = `Computer Score: 0`;

rBtn.setAttribute("value", "rock");
pBtn.setAttribute("value", "paper");
sBtn.setAttribute("value", "scissors");
rBtn.setAttribute("class", "btn");
pBtn.setAttribute("class", "btn");
sBtn.setAttribute("class", "btn");

const btn = document.querySelector(".btn");

container.appendChild(rBtn);
container.appendChild(pBtn);
container.appendChild(sBtn);

scoreBoard.appendChild(text);
scoreBoard.appendChild(human);
scoreBoard.appendChild(computer);


document.body.appendChild(container);
document.body.appendChild(scoreBoard);

// container.addEventListener("click", playGame);

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);

  if (choice == 1) {
    choice = "rock";
  } else if (choice == 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

sBtn.setAttribute("style", "background: red;");

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  let computerChoice = null;

  container.addEventListener("click", function playRound(event) {
    const humanChoice = event.target.value;
    console.log(humanChoice);

    computerChoice = getComputerChoice();
    console.log(computerChoice);

      if (humanScore < 5 && computerScore < 5) {
        if (humanChoice == "rock" && computerChoice == "paper") {
          text.textContent = "You lose! paper beats rocks";
          computerScore++;
          computer.textContent = `Computer Score: ${computerScore}`;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
          text.textContent = "You win! paper beats rock";
          humanScore++;
          human.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
          text.textContent = "You win! rocks beats scissors";
          humanScore++;
          human.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
          text.textContent = "You lose! rock beats scissors";
          computerScore++;
          computer.textContent = `Computer Score: ${computerScore}`;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
          text.textContent = "You lose! scissors beats paper";
          computerScore++;
          computer.textContent = `Computer Score: ${computerScore}`;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
          text.textContent = "You win! scissors beats paper";
          humanScore++;
          human.textContent = `Your Score: ${humanScore}`;
        } else {
          text.textContent = "Draw!";
        }
      } else if (humanScore == 5) {
        text.textContent = "You win!!!";
      } else{
        text.textContent = "You lose";
      }
    
  });
}

playGame();
