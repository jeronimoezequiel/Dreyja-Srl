function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;

    if ((hours >= 8 && hours < 16) || (hours === 16 && minutes <= 30)) {
        clockElement.classList.remove('red');
        clockElement.classList.add('green');
    } else {
        clockElement.classList.remove('green');
        clockElement.classList.add('red');
    }
}

updateClock();
setInterval(updateClock, 1000);


