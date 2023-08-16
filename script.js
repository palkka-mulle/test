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


$('#group').click(function(){
        $('#group').removeAttr('style');
        setTimeout(function(){
            var num =  Math.ceil(Math.random()*6);
            if(num==1){
                $('#group').css({
                    'animation':'scroll 2s linear 0s 2 alternate',
                    '-webkit-animation':'scroll 2s linear 0s 2 alternate',
                    '-moz-animation':'scroll 2s linear 0s 2 alternate',
                    'transform':'rotateY(360deg) rotateX(360deg) rotateZ(360deg)',
                    '-webkit-transform':'rotateY(360deg) rotateX(360deg) rotateZ(360deg)',
                    '-moz-transform':'rotateY(360deg) rotateX(360deg) rotateZ(360deg)'
                })
            }else if(num==2){
                $('#group').css({
                    'animation':'scroll 2s linear 0s 2 alternate',
                    '-webkit-animation':'scroll 2s linear 0s 2 alternate',
                    '-moz-animation':'scroll 2s linear 0s 2 alternate',
                    'transform':'rotateY(270deg) rotateX(360deg) rotateZ(360deg)',
                    '-webkit-transform':'rotateY(270deg) rotateX(360deg) rotateZ(360deg)',
                    '-moz-transform':'rotateY(270deg) rotateX(360deg) rotateZ(360deg)'
                })
            }else if(num==3){
                $('#group').css({
                    'animation':'scroll 2s linear 0s 2 alternate',
                    '-webkit-animation':'scroll 2s linear 0s 2 alternate',
                    '-moz-animation':'scroll 2s linear 0s 2 alternate',
                    'transform':'rotateY(180deg) rotateX(270deg) rotateZ(270deg)',
                    '-webkit-transform':'rotateY(180deg) rotateX(270deg) rotateZ(270deg)',
                    '-moz-transform':'rotateY(180deg) rotateX(270deg) rotateZ(270deg)'
                })
            }else if(num==4){
                $('#group').css({
                    'animation':'scroll 2s linear 0s 2 alternate',
                    '-webkit-animation':'scroll 2s linear 0s 2 alternate',
                    '-moz-animation':'scroll 2s linear 0s 2 alternate',
                    'transform':'rotateY(180deg) rotateX(90deg) rotateZ(360deg)',
                    '-webkit-transform':'rotateY(180deg) rotateX(90deg) rotateZ(360deg)',
                    '-moz-transform':'rotateY(180deg) rotateX(90deg) rotateZ(360deg)'
                })
            }else if(num==5){
                $('#group').css({
                    'animation':'scroll 2s linear 0s 2 alternate',
                    '-webkit-animation':'scroll 2s linear 0s 2 alternate',
                    '-moz-animation':'scroll 2s linear 0s 2 alternate',
                    'transform':'rotateY(180deg) rotateX(270deg) rotateZ(360deg)',
                    '-webkit-transform':'rotateY(180deg) rotateX(270deg) rotateZ(360deg)',
                    '-moz-transform':'rotateY(180deg) rotateX(270deg) rotateZ(360deg)'
                })
            }else if(num==6){
                $('#group').css({
                    'animation':'scroll 2s linear 0s 2 alternate',
                    '-webkit-animation':'scroll 2s linear 0s 2 alternate',
                    '-moz-animation':'scroll 2s linear 0s 2 alternate',
                    'transform':'rotateY(180deg) rotateX(360deg) rotateZ(360deg)',
                    '-webkit-transform':'rotateY(180deg) rotateX(360deg) rotateZ(360deg)',
                    '-moz-transform':'rotateY(180deg) rotateX(360deg) rotateZ(360deg)'
                })
            } 
        },1)
    })
