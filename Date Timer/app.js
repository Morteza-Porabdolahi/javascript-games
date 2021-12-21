const input = document.querySelector("input[name = 'date']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStart = true;
let saveValue = localStorage.getItem("countdown") || false;
if (saveValue) {
    startClock(saveValue);
    let inputValue = new Date(saveValue);
    input.valueAsDate = inputValue;
}
input.addEventListener("change", function () {
    clearInterval(timeInterval);
    const date = new Date(input.value);
    localStorage.setItem("countdown",date)
    startClock(date);
    timeStart = true;
})
function startClock(d) {
    function updateCounter() {
        let timespan = (timeLeft(d));
        let p = document.getElementById("msg");
        if (timespan.total <= 0) {
            timeStart = false;
            p.innerHTML = "You can't select less than current system date"
        } else {
            p.innerHTML = "";
        }
        for (let n in timespan) {
            let el = clock.querySelector("." + n);
            if (el) {
                el.innerHTML = timespan[n];
            }
        }
    }
    updateCounter();
    if (timeStart) {
        timeInterval = setInterval(updateCounter, 1000);
    } else {
        clearInterval(timeInterval);
    }
}
function timeLeft(d) {
    let currentDate = new Date();
    let t = Date.parse(d) - Date.parse(currentDate);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor(t / (1000 * 60 * 60) % 24)
    let minutes = Math.floor(((t / 1000) / 60) % 60);
    let seconds = Math.floor((t / 1000) % 60);
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    }
}