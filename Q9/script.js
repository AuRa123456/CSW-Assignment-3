document.addEventListener('DOMContentLoaded', function () {
    let score = 0;
    const scoreElement = document.getElementById('score');
    const resultText = document.getElementById('resultText');
    const choices = document.querySelectorAll('.choices button');
  
    function updateScore() {
      scoreElement.textContent = score;
    }
  
    function computerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }
  
    function determineWinner(playerChoice, compChoice) {
      if (playerChoice === compChoice) return 'It\'s a draw!';
      if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper')
      ) {
        score++;
        return 'You win!';
      } else {
        score--;
        return 'Computer wins!';
      }
    }
  
    choices.forEach(choice => {
      choice.addEventListener('click', function () {
        const playerChoice = this.id;
        const compChoice = computerChoice();
        const result = determineWinner(playerChoice, compChoice);
  
        resultText.textContent = `You chose ${playerChoice}. Computer chose ${compChoice}. ${result}`;
        updateScore();
      });
    });
  
    updateScore();
  });
  