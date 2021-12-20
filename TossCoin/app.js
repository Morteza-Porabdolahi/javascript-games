const message = document.getElementById("demo");
const buttons = document.querySelectorAll("button");
const coinArrays = ["Heads", "Tails"]
let score = [0,0]
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", Toss);
}

function Toss(e) {
    let playerGuess = e.target.innerHTML;
    let computertoss = Math.floor(Math.random() * 2)
    let computerguess = coinArrays[computertoss];
    message.innerHTML = "Computer selected " + computerguess;
    if (computerguess === playerGuess) {
        message.innerHTML += " Player Win!";
        score[0]++;
    } else {
        message.innerHTML += " Computer Win!"
        score[1]++;
    }
    message.innerHTML +="</br> Player Score : " + score[0] + "</br> Computer Score : " + score[1];

}
