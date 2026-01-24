// Latter-day Prophets Fetch API Activity

// URL of the JSON data source
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Select the cards div element
const cards = document.querySelector('#cards');

// Async function to fetch prophet data
async function getProphetData() {
    try {
        // Fetch the data from the URL
        const response = await fetch(url);

        // Convert response to JSON
        const data = await response.json();

        // Display the data in console (for testing)
        // console.table(data.prophets);

        // Call displayProphets with the prophets array
        displayProphets(data.prophets);

    } catch (error) {
        console.error('Error fetching prophet data:', error);
    }
}

// Function to display prophets as cards
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');

        // Add class and role to card for styling and accessibility
        card.className = 'card';
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Information about ${prophet.name} ${prophet.lastname}`);

        // Populate the full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set image attributes with descriptive alt text
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}, ${prophet.order}${getOrdinalSuffix(prophet.order)} President of the Church`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '400');

        // Add birth date information
        birthDate.innerHTML = `<strong>Date of Birth:</strong> ${prophet.birthdate}`;

        // Add birth place information
        birthPlace.innerHTML = `<strong>Place of Birth:</strong> ${prophet.birthplace}`;

        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Add the card to the cards container
        cards.appendChild(card);
    });
};

// Helper function to get ordinal suffix (1st, 2nd, 3rd, etc.)
function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
}

// Call the function to fetch and display prophet data
getProphetData();
