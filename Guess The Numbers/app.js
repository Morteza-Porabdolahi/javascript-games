const button = document.querySelector("button");
const gameArea = document.querySelector(".game");
const scoremes = document.getElementById("score");
button.addEventListener("click", startGame);
let gamePlayed = false;
let score = 0;
let wincondition = 0;
function startGame() {
    if (gamePlayed != true) {
        gamePlayed = true;
        button.innerHTML = "Check Combos";
        scoremes.innerHTML = "Guess The Numbers";
        gameArea.innerHTML = "";
        maker();
    } else {
        const numbers = document.querySelectorAll(".number");
        score++;
        scoremes.innerHTML = " Your Guesses | " + score;
        for (var i = 0; i < numbers.length; i++){
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                wincondition++;
            } else if (numbers[i].value > numbers[i].correct) {
                numbers[i].style.backgroundColor = "red";
            } else if (numbers[i].value < numbers[i].correct) {
                numbers[i].style.backgroundColor = "blue";
            }
            if (wincondition == numbers.length) {
                endGame();
            }
        }
    }
}
function endGame() {
    scoremes.innerHTML = "You Win The Game With " + score + " Gusses";
    gamePlayed = false;
    button.innerHTML = "Restart Game";
}
function maker() {
    for (var i = 0; i < 6; i++){
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.max = 9;
        input.min = 0;
        input.order = 0;
        input.correct = Math.floor(Math.random() * 10);
        input.value = 0;
        input.classList.add("number");
        input.style.width = "50px";
        gameArea.appendChild(input);
    }
}