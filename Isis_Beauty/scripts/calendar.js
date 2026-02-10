// scripts/calendar.js
// Calendar and appointment logic

// --- Calendar Logic ---
let calNow = new Date();

function renderCalendar() {
    const calendarLabel = document.getElementById('calendar-label');
    const calendarDays = document.getElementById('calendar-days');
    if (!calendarLabel || !calendarDays) return;
    let year = calNow.getFullYear(), month = calNow.getMonth();
    calendarLabel.innerText = calNow.toLocaleString('default', { month: 'long' }) + " " + year;
    let first = new Date(year, month, 1).getDay();
    let days = new Date(year, month + 1, 0).getDate();
    let calGrid = [];
    for (let i = 0; i < first; i++) calGrid.push('<div></div>');
    for (let d = 1; d <= days; d++) {
        let today = (new Date().toDateString() === new Date(year, month, d).toDateString());
        calGrid.push(`<div class="cal-day${today ? ' cal-today' : ''}">${d}</div>`);
    }
    calendarDays.innerHTML = calGrid.join('');
}

function moveCal(byMonths) {
    calNow.setMonth(calNow.getMonth() + byMonths);
    renderCalendar();
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('calendar-days')) {
        renderCalendar();
        const prevBtn = document.getElementById('cal-prev');
        const nextBtn = document.getElementById('cal-next');
        if (prevBtn) prevBtn.onclick = () => moveCal(-1);
        if (nextBtn) nextBtn.onclick = () => moveCal(1);
    }
});
