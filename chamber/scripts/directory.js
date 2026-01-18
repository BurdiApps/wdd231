// ===================================
// Member Directory JavaScript
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeDirectory();
});

// Initialize all directory functionality
function initializeDirectory() {
    setupNavigation();
    setupViewToggle();
    loadMembers();
    updateFooterDates();
}

// ===================================
// Navigation Menu Toggle
// ===================================
function setupNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// ===================================
// View Toggle (Grid/List)
// ===================================
function setupViewToggle() {
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');
    const container = document.getElementById('members-container');

    gridBtn.addEventListener('click', () => {
        container.classList.remove('members-list');
        container.classList.add('members-grid');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    });

    listBtn.addEventListener('click', () => {
        container.classList.remove('members-grid');
        container.classList.add('members-list');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    });
}

// ===================================
// Fetch and Display Members
// ===================================
async function loadMembers() {
    const container = document.getElementById('members-container');

    try {
        // Show loading state
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Loading members...</p>';

        // Fetch data using async/await
        const response = await fetch('data/members.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Display members
        displayMembers(data.members);

    } catch (error) {
        console.error('Error loading members:', error);
        container.innerHTML = `
            <p style="text-align: center; padding: 2rem; color: #d32f2f;">
                Failed to load member directory. Please try again later.
            </p>
        `;
    }
}

// ===================================
// Display Members in the DOM
// ===================================
function displayMembers(members) {
    const container = document.getElementById('members-container');

    // Clear container
    container.innerHTML = '';

    // Create card for each member
    members.forEach(member => {
        const card = createMemberCard(member);
        container.appendChild(card);
    });
}

// ===================================
// Create Individual Member Card
// ===================================
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';

    // Determine membership level text and class
    const membershipInfo = getMembershipInfo(member.membershipLevel);

    // Build card HTML
    card.innerHTML = `
        <img src="images/${member.image}" 
             alt="${member.name}" 
             loading="lazy"
             onerror="this.src='images/placeholder.jpg'">
        <div class="member-info">
            <h3>${member.name}</h3>
            <span class="membership-badge ${membershipInfo.class}">${membershipInfo.text}</span>
            <p class="description">${member.description}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> <a href="tel:${member.phone.replace(/\D/g, '')}">${member.phone}</a></p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
        </div>
    `;

    return card;
}

// ===================================
// Get Membership Level Information
// ===================================
function getMembershipInfo(level) {
    const levels = {
        1: { text: 'Member', class: 'member' },
        2: { text: 'Silver', class: 'silver' },
        3: { text: 'Gold', class: 'gold' }
    };

    return levels[level] || levels[1];
}

// ===================================
// Update Footer with Dynamic Dates
// ===================================
function updateFooterDates() {
    // Current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Last modified date
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
}

// ===================================
// Optional: Filter/Search Functionality
// (Can be added later if needed)
// ===================================
function filterMembers(searchTerm) {
    const cards = document.querySelectorAll('.member-card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const matches = text.includes(searchTerm.toLowerCase());
        card.style.display = matches ? '' : 'none';
    });
}
