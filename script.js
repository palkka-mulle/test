// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  const dynamicButton = document.getElementById('dynamic-button');
  const map = document.querySelector('.map');
  
  // Position the dynamic button when the page loads or the window is resized
  function positionDynamicButton() {
    const mapRect = map.getBoundingClientRect();
    const offsetX = Math.floor(mapRect.width / 7); // 1/7 of the horizontal width
    const offsetY = Math.floor(mapRect.height / 5); // 1/5 of the vertical height
    
    const buttonX = mapRect.left + offsetX;
    const buttonY = mapRect.top + offsetY;
    
    dynamicButton.style.left = `${buttonX}px`;
    dynamicButton.style.top = `${buttonY}px`;
  }
  
  // Set up button positioning
  positionDynamicButton();
  window.addEventListener('resize', positionDynamicButton);
  
  // Button hover effect
  dynamicButton.addEventListener('mouseover', () => {
    dynamicButton.innerHTML = 'aaaa';
  });
  
  dynamicButton.addEventListener('mouseout', () => {
    dynamicButton.innerHTML = '';
  });
  
  // Dice roll button click event
  const diceButton = document.getElementById('dice');
  const resultElement = document.getElementById('result');
  
  diceButton.addEventListener('click', rollDice);
  
  function rollDice() {
    const randomNum = Math.floor(Math.random() * 6) + 1; // Generates random number between 1 and 6
    resultElement.textContent = `Result: ${randomNum}`;
  }
});
