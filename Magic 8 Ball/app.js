const button = document.querySelector("button");
const message = document.getElementById("demo");
const question = document.querySelector("input");
const quesArray = ["Not Bad !",
    "Thank You !",
    "I Don't know what do you say !",
    "Yesss :DDDD",
    "Nah Bro :(",
    "Yes yes yes",
    "What about you?",
    "Come on man do not do this ;)"
];
button.addEventListener("click", askFunc);
function askFunc() {
    if (question.value === "" || question.value === undefined) {
        message.innerHTML = "It's not impossible man , dont bully me :(";
    } else {
        let res = Math.floor(Math.random() * quesArray.length);
        message.innerHTML = quesArray[res];
    }

}