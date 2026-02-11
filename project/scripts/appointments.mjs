// ===== appointments.mjs – Calendar, form, localStorage appointments =====
import { initNav } from './nav.mjs';

// DOM references
const calendarLabel = document.getElementById('calendar-label');
const calendarDays = document.getElementById('calendar-days');
const prevBtn = document.getElementById('cal-prev');
const nextBtn = document.getElementById('cal-next');
const form = document.getElementById('appointment-form');
const appointmentsList = document.getElementById('appointments-list');

let currentDate = new Date();

// ===== Calendar rendering =====
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    calendarLabel.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const appointments = getAppointments();

    let html = '';

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="cal-day cal-empty"></div>';
    }

    // Day cells
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
        const hasAppt = appointments.some(a => a.date === dateStr);

        html += `<div class="cal-day${isToday ? ' cal-today' : ''}">
            ${day}
            ${hasAppt ? '<span class="cal-appt-dot" title="Appointment"></span>' : ''}
        </div>`;
    }

    calendarDays.innerHTML = html;
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// ===== Appointments localStorage =====
function getAppointments() {
    return JSON.parse(localStorage.getItem('gb-appointments') || '[]');
}

function saveAppointments(list) {
    localStorage.setItem('gb-appointments', JSON.stringify(list));
}

// ===== Render saved appointments =====
function renderAppointments() {
    const appointments = getAppointments();

    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<li class="empty-message">No appointments booked yet.</li>';
        return;
    }

    // Sort by date ascending
    const sorted = [...appointments].sort((a, b) => new Date(a.date) - new Date(b.date));

    appointmentsList.innerHTML = sorted.map((appt, index) => `
        <li>
            <strong>${appt.type}</strong> – ${new Date(appt.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
            <br><span class="mini">${appt.location ? `📍 ${appt.location}` : ''} ${appt.notes ? `• ${appt.notes}` : ''}</span>
            <button class="btn-delete" data-index="${index}" aria-label="Delete appointment">✕</button>
        </li>
    `).join('');

    // Delete buttons
    appointmentsList.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = Number(btn.dataset.index);
            const list = getAppointments();
            const sortedList = [...list].sort((a, b) => new Date(a.date) - new Date(b.date));
            const toRemove = sortedList[idx];
            const newList = list.filter(a => !(a.date === toRemove.date && a.type === toRemove.type && a.name === toRemove.name));
            saveAppointments(newList);
            renderAppointments();
            renderCalendar();
        });
    });
}

// ===== Form submission – save to localStorage AND allow GET submit =====
form.addEventListener('submit', (e) => {
    // Save to localStorage before the form navigates to thankyou.html
    const appt = {
        name: form.elements['name'].value,
        type: form.elements['type'].value,
        date: form.elements['date'].value,
        location: form.elements['location'].value,
        notes: form.elements['notes'].value
    };

    const appointments = getAppointments();
    appointments.push(appt);
    saveAppointments(appointments);
    // Form will naturally submit via GET to thankyou.html
});

// ===== Initialise =====
initNav();
renderCalendar();
renderAppointments();
