const message = document.getElementById("message");
const input = document.getElementById("guess");
const btn = document.getElementById("btn");
let words = ["new", "hello", "good", "better", "ocean", "tiger", "waterfall", "god", "you", "yes", "way"];
let gamePlayed = false;
let scramble = "";
let scrambled = "";
let score = 0;
btn.addEventListener("click", startGame);
function startGame() {
    if (!gamePlayed) {
        gamePlayed = true;
        btn.innerHTML = "Guess"
        input.classList.toggle("hidden");
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
        input.value = "";
    } else {
        let tempguess = input.value;
        score++;
        if (tempguess == scramble) {
            gamePlayed = false;
            btn.innerHTML = "Restart Game"
            message.innerHTML = "You guess correct It took " + score + " Guesses";
            input.classList.toggle("hidden");
            score = 0;
        } else {
            message.innerHTML = " :( Try again | " + scrambled;
        }
    }
}
function createWord() {
    let random = Math.floor(Math.random() * words.length)
    let tempword = words[random];
    return tempword;
}
function randomArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}