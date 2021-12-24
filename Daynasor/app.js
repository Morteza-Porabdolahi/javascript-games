var human = document.getElementById("human");
var tree = document.getElementById("tree");
var score = 0;

function jump() {
    if (human.classList == "humanjump") {
        return;
    }
    human.classList.add("humanjump");
    setTimeout(function() {
        human.classList.remove("humanjump")
    }, 300)
}
var checkDead = setInterval(function() {
    let humanpostop = parseInt(window.getComputedStyle(human).getPropertyValue(
        "top"));
    let blockleft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    console.log(blockleft)
    console.log(humanpostop)
    if (blockleft < 18 && blockleft > -12 && humanpostop >= 128) {
        tree.style.animation = "none";
        alert("Game Over Score : " + Math.floor(score / 100))
        score = 0;
        tree.style.animation = "tree 1s infinite linear"
    } else {
        score++;
        document.getElementById("score").innerHTML = Math.floor(score / 100);
    }
}, 10)