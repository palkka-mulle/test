const dynamicButton = document.getElementById('dynamic-button');

dynamicButton.addEventListener('mouseover', () => {
  dynamicButton.innerHTML = 'aaaa';
});

dynamicButton.addEventListener('mouseout', () => {
  dynamicButton.innerHTML = '';
});
