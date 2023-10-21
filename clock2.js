function updateClock() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const clock = document.getElementById('clock');
    const statusOpen = document.getElementById('status-open');
    const statusClosed = document.getElementById('status-closed');

    if (
        (day >= 1 && day <= 5 && hour >= 8 && hour < 16 ) ||
        (day === 6 && hour >= 8 && (hour < 12 || (hour === 12 && minute < 30)))
    ) {
        clock.style.color = 'green';
        statusOpen.style.display = 'inline';
        statusClosed.style.display = 'none';
    } else {
        clock.style.color = 'red';
        statusOpen.style.display = 'none';
        statusClosed.style.display = 'inline';
    }

    const formattedHour = String(hour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');
    clock.textContent = `${formattedHour}:${formattedMinute}`;
}

updateClock();
setInterval(updateClock, 1000);