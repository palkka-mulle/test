const dynamicButton = document.getElementById('dynamic-button');
const map = document.querySelector('.map');

const diceButton = document.getElementById('dice');
const resultElement = document.getElementById('result');

diceButton.addEventListener('click', rollDice);

function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1; // Generates random number between 1 and 6
  resultElement.textContent = `Result: ${randomNum}`;
}

// Rest of your script code for dynamic button positioning
