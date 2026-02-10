// Discover Page JavaScript
import { attractions } from '../data/attractions.mjs';

// DOM Elements
const attractionsGrid = document.getElementById('attractions-grid');
const visitorMessage = document.getElementById('visitor-message');
const closeMessageBtn = document.getElementById('close-message');

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    buildAttractionCards();
    displayVisitorMessage();
    setupNavigation();
    updateFooterDates();
});

// Build attraction cards from JSON data
function buildAttractionCards() {
    attractions.forEach(attraction => {
        const card = document.createElement('article');
        card.className = 'attraction-card';
        card.innerHTML = `
            <figure>
                <img src="${attraction.image}" 
                     alt="${attraction.name}" 
                     loading="lazy"
                     width="300" 
                     height="200">
            </figure>
            <div class="attraction-info">
                <h2>${attraction.name}</h2>
                <address>${attraction.address}</address>
                <p>${attraction.description}</p>
                <button class="learn-more-btn" onclick="window.open('${attraction.website}', '_blank')">
                    Learn More
                </button>
            </div>
        `;
        attractionsGrid.appendChild(card);
    });
}

// Display visitor message based on localStorage
function displayVisitorMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();
    let message = '';

    if (!lastVisit) {
        // First visit
        message = 'Welcome! Let us know if you have any questions.';
    } else {
        const lastVisitDate = parseInt(lastVisit);
        const timeDifference = currentVisit - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            // Less than a day
            message = 'Back so soon! Awesome!';
        } else if (daysDifference === 1) {
            // Exactly 1 day
            message = 'You last visited 1 day ago.';
        } else {
            // Multiple days
            message = `You last visited ${daysDifference} days ago.`;
        }
    }

    // Update localStorage with current visit
    localStorage.setItem('lastVisit', currentVisit.toString());

    // Display message
    if (visitorMessage) {
        const messageText = visitorMessage.querySelector('.message-text');
        if (messageText) {
            messageText.textContent = message;
        }
        visitorMessage.classList.add('show');
    }
}

// Close visitor message
if (closeMessageBtn) {
    closeMessageBtn.addEventListener('click', () => {
        visitorMessage.classList.remove('show');
        visitorMessage.classList.add('hide');
    });
}

// Setup mobile navigation toggle
function setupNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
}

// Update footer with current year and last modified date
function updateFooterDates() {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}
