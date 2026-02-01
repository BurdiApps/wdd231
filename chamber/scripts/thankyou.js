// Thank You Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Set current year and last modified
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Display form data from URL parameters
    displayFormData();
});

function displayFormData() {
    const resultsContainer = document.getElementById('form-results');
    const params = new URLSearchParams(window.location.search);

    // Define the required fields to display with labels
    const fields = [
        { key: 'first-name', label: 'First Name' },
        { key: 'last-name', label: 'Last Name' },
        { key: 'email', label: 'Email Address' },
        { key: 'phone', label: 'Mobile Phone' },
        { key: 'org-name', label: 'Business Name' },
        { key: 'membership-level', label: 'Membership Level' },
        { key: 'timestamp', label: 'Application Date' }
    ];

    let output = '';

    fields.forEach(field => {
        let value = params.get(field.key);

        if (value) {
            // Format the membership level for display
            if (field.key === 'membership-level') {
                const levelNames = {
                    'np': 'NP Membership (Non-Profit)',
                    'bronze': 'Bronze Membership',
                    'silver': 'Silver Membership',
                    'gold': 'Gold Membership'
                };
                value = levelNames[value] || value;
            }

            // Format the timestamp for display
            if (field.key === 'timestamp') {
                const date = new Date(value);
                value = date.toLocaleString();
            }

            output += `
                <div class="result-item">
                    <span class="result-label">${field.label}:</span>
                    <span class="result-value">${value}</span>
                </div>
            `;
        }
    });

    if (output) {
        resultsContainer.innerHTML = output;
    } else {
        resultsContainer.innerHTML = '<p>No application data found.</p>';
    }
}
