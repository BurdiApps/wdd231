// ===== thankyou.mjs – Read URL Search Params and display confirmation =====
import { initNav } from './nav.mjs';

const card = document.getElementById('confirmation-card');

// ===== Read URL Search Params from form GET submission =====
function displayConfirmation() {
    const params = new URLSearchParams(window.location.search);

    const name = params.get('name');
    const type = params.get('type');
    const date = params.get('date');
    const location = params.get('location');
    const notes = params.get('notes');

    if (!name || !type || !date) {
        card.innerHTML = `
            <p>No appointment details found.</p>
            <p>Please <a href="appointments.html">book an appointment</a> first.</p>
        `;
        return;
    }

    const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    card.innerHTML = `
        <h3>Thank you, ${name}! 💖</h3>
        <p><strong>Appointment Type:</strong> ${type}</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        <p class="confirmation-msg">Your appointment has been saved. Check your <a href="appointments.html">Appointments</a> page for details.</p>
    `;
}

// ===== Initialise =====
initNav();
displayConfirmation();
