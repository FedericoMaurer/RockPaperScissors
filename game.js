let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(`input`);

function getComputerChoice(){
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons(){
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

function playRound(playerSelection){
  let computerSelection = getComputerChoice();
  let result = "";

  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")){
        playerScore += 1
        result = (`<br> Ganaste! ` + playerSelection + ` vence ` + computerSelection 
        + "<br><br>Puntaje jugador: " + playerScore + "<br>Puntaje computador: " + computerScore);

        if (playerScore == 5) {
          result += `<br><br>Ganaste el juego! Recarga la página para jugar nuevamente`
          disableButtons();
        }
      }

      else if (playerSelection == computerSelection) {
        result = ('<br> Es un empate. Ambos eligieron ' + playerSelection
            + "<br><br>Puntaje jugador: " + playerScore + "<br>Puntaje computadora: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('<br> Perdiste! ' + computerSelection + ' vence ' + playerSelection
            + "<br><br>Puntaje jugador: " + playerScore + "<br>Puntaje computadora: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>La computadora ganó el juego! Recarga la página para jugar nuevamente'
            disableButtons();
        }
    }

    document.getElementById(`result`).innerHTML = result;
}

buttons.forEach(button =>{
  button.addEventListener(`click`, function(){
    playRound(button.value)
  })
})


