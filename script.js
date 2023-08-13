const player = document.querySelector('.player');
const diceButton = document.querySelector('.dice-button');

diceButton.addEventListener('click', rollDice);

function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  diceButton.textContent = `Dice: ${randomNum}`;
  movePlayer(randomNum);
}

function movePlayer(steps) {
  const currentPosition = parseInt(player.style.left) || 0;
  const newPosition = currentPosition + (steps * 40); // Adjust as needed
  player.style.left = `${newPosition}px`;

  // Check if player has reached the destination
  if (newPosition >= 600) {
    alert('Congratulations! You reached the destination!');
    player.style.left = '0';
    diceButton.textContent = 'Roll Dice';
  }
}
