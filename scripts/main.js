// Get reference to the hamburger button and nav element
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

// Add click event listener to toggle the menu
navButton.addEventListener('click', () => {
    // Toggle 'show' class on button (changes hamburger to X)
    navButton.classList.toggle('show');

    // Toggle 'show' class on navigation (shows/hides menu)
    navBar.classList.toggle('show');
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

