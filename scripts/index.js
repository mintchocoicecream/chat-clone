// status-bar clock

const clockDiv = document.getElementById("clock");
const clock = clockDiv.querySelector("span");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);