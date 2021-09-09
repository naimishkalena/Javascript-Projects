const daysEL = document.getElementById("days")
const hoursEL = document.getElementById("hours")
const minsEL = document.getElementById("minutes")
const secondsEL = document.getElementById("seconds")

const incHoli = "18 March 2022"

function countdown() {
    const incHoliDate = new Date(incHoli)
    const currentDate = new Date();


    const totalSec = (incHoliDate - currentDate) / 1000;

    const days = Math.floor(totalSec / 3600 / 24)

    const hours = Math.floor(totalSec / 3600) % 24

    const minutes = Math.floor(totalSec / 60) % 60

    const seconds = Math.floor(totalSec % 60)

    daysEL.textContent = days;
    hoursEL.textContent = fTime(hours);
    minsEL.textContent = fTime(minutes);
    secondsEL.textContent = fTime(seconds)
}

function fTime(time) {
    return time < 10 ? `0${time}` : time
}

setInterval(countdown, 1000)
countdown()