const positionButtons = document.querySelectorAll('.position-button');
const player = document.querySelector('.player');
const diceButton = document.querySelector('.dice-button');

// Position buttons' click event handlers
positionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const position = button.getBoundingClientRect();
    movePlayerToPosition(position.top, position.left);
  });
});

// Move the player to a specific position
function movePlayerToPosition(top, left) {
  player.style.top = `${top}px`;
  player.style.left = `${left}px`;
}

// ... Your existing code ...
