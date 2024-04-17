let rand_num = Math.floor(Math.random()*100+1)
console.log(rand_num)

let input_field = document.querySelector('#num-input')
let submit_btn = document.querySelector('.submit-btn')
let prev_guess = document.querySelector('.prev-guess')
let guess_left = document.querySelector('.guess-left')
let low_or_high = document.querySelector('.low-or-high')
let output_area = document.querySelector('.output-area')

let p = document.createElement('p')

let numOfGuess = 0

let playGame = true

let guess = 0

if(playGame)
{
    submit_btn.addEventListener('click',function()
    {
        guess = parseInt(input_field.value)
        validateGuess(guess)
    });
    
    // Add an event listener to the input field for keypress event
    input_field.addEventListener('keypress', function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default action of the Enter key
        event.preventDefault();
        // Trigger the same functionality as clicking the submit button
        guess = parseInt(input_field.value);
        validateGuess(guess);
    }
});

}

function validateGuess(guess)
{
    if(isNaN(guess))
        alert('Please enter a valid number')
    else if(guess < 1)
        alert('Please enter a number greater than 1')
    else if(guess > 100)
        alert('Please enter a number lesser than or equal to 100')
    else
    {
        if(numOfGuess === 10)
        {   displayGuess(guess)
            displayMessage(`Game Over. The Number Generated was ${rand_num}`)
            endGame()
        }
        displayGuess(guess)
        checkGuess(guess)
        
        
    
    }  
}

// function validateGuess(guess) {
//     if (isNaN(guess))
//         alert('Please enter a valid number');
//     else if (guess < 1)
//         alert('Please enter a number greater than 1');
//     else if (guess > 100)
//         alert('Please enter a number lesser than or equal to 100');
//     else {
//         if (numOfGuess === 9) { // Adjusted the condition here to check if numOfGuess is 9
//             displayGuess(guess);
//             displayMessage(`Game Over. The Number Generated was ${rand_num}`);
//             endGame();
//         } else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function validateGuess(guess) {
//     if (isNaN(guess))
//         alert('Please enter a valid number');
//     else if (guess < 1)
//         alert('Please enter a number greater than 1');
//     else if (guess > 100)
//         alert('Please enter a number lesser than or equal to 100');
//     else {
//         displayGuess(guess);
//         checkGuess(guess);
//         // Move the condition for ending the game here
//         if (numOfGuess === 9) {
//             displayMessage(`Game Over. The Number Generated was ${rand_num}`);
//             endGame();
//         }
//     }
// }


function checkGuess(guess)
{
    if(guess > rand_num)
    {
        displayMessage("It is too high")
    }
    else if(guess < rand_num)
    {
        displayMessage("It is too low")
    }
    else
    {
        displayMessage("You are Right :) !")
        endGame()
    }
}

function displayGuess(guess)
{
    input_field.value = ""
    input_field.focus()
    prev_guess.innerHTML+= `${guess} `
    numOfGuess++
    guess_left.innerHTML = `${10 - numOfGuess}`
}

// function displayGuess(guess) {
//     input_field.value = "";
//     input_field.focus();
//     prev_guess.innerHTML += `${guess} `;
//     // Increment numOfGuess after checking the condition
//     guess_left.innerHTML = `${10 - (numOfGuess + 1)}`; // Adjusting here to subtract 1
//     numOfGuess++;
// }

function displayMessage(message)
{
    low_or_high.innerHTML = `<h3>${message}</h3>`
}

function endGame()
{
  input_field.value = '';
  input_field.focus()
  input_field.setAttribute('disabled', '');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  output_area.appendChild(p);
  playGame = false;
  newGame();

}
function newGame()
{
    const startOver = document.querySelector('#newGame')
    startOver.style.cursor = 'pointer'
    startOver.style.textDecoration = "underline"
    startOver.addEventListener('click', function()
{
    rand_num = Math.floor(Math.random()*100+1)

    prev_guess.innerHTML = ""
    numOfGuess=0
    guess_left.innerHTML = `${10 - numOfGuess}`
    low_or_high.innerHTML = ""
    input_field.removeAttribute('disabled');
    input_field.value = '';
    input_field.focus()
    output_area.removeChild(p);
    playGame = true;
    

})
}

