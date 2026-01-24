// ===================================
// Chamber Home Page JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initializeHomePage();
});

function initializeHomePage() {
    setupNavigation();
    updateFooterDates();
    fetchWeather();
    fetchSpotlights();
}

// ===================================
// Navigation Menu Toggle
// ===================================
function setupNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = nav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
}

// ===================================
// Update Footer with Dynamic Dates
// ===================================
function updateFooterDates() {
    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
}

// ===================================
// Weather API - OpenWeatherMap
// ===================================
// Bakersfield, CA coordinates: 35.37, -119.02
const weatherApiKey = '8ef84e53bc40ee570531995c34dbde72'; 
const lat = 35.37;
const lon = -119.02;

// Current weather URL
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`;

// 5-day forecast URL (to get 3-day forecast)
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`;

async function fetchWeather() {
    try {
        // Fetch current weather
        const currentResponse = await fetch(currentWeatherUrl);
        if (currentResponse.ok) {
            const currentData = await currentResponse.json();
            displayCurrentWeather(currentData);
        } else {
            throw Error(await currentResponse.text());
        }

        // Fetch forecast
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }

    } catch (error) {
        console.error('Error fetching weather:', error);
        displayWeatherError();
    }
}

function displayCurrentWeather(data) {
    const tempElement = document.getElementById('current-temp');
    const descElement = document.getElementById('weather-desc');
    const iconElement = document.getElementById('weather-icon');

    if (tempElement) {
        tempElement.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    }

    if (descElement) {
        // Capitalize first letter of each word
        const description = data.weather[0].description
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        descElement.textContent = description;
    }

    if (iconElement) {
        const iconCode = data.weather[0].icon;
        iconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        iconElement.alt = data.weather[0].description;
    }
}

function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    if (!forecastContainer) return;

    // Clear existing content
    forecastContainer.innerHTML = '';

    // Get one forecast per day (every 8th item = 24 hours, since data is every 3 hours)
    // Start from tomorrow and get 3 days
    const dailyForecasts = [];
    const today = new Date().getDate();

    for (let i = 0; i < data.list.length && dailyForecasts.length < 3; i++) {
        const forecastDate = new Date(data.list[i].dt * 1000);
        const forecastDay = forecastDate.getDate();

        // Skip today, get noon forecasts for accuracy
        if (forecastDay !== today && forecastDate.getHours() >= 11 && forecastDate.getHours() <= 14) {
            // Check if we already have this day
            const alreadyHave = dailyForecasts.some(f =>
                new Date(f.dt * 1000).getDate() === forecastDay
            );

            if (!alreadyHave) {
                dailyForecasts.push(data.list[i]);
            }
        }
    }

    // If we don't have enough, just grab the first available
    if (dailyForecasts.length < 3) {
        const seenDays = new Set(dailyForecasts.map(f => new Date(f.dt * 1000).getDate()));
        seenDays.add(today);

        for (let i = 0; i < data.list.length && dailyForecasts.length < 3; i++) {
            const forecastDate = new Date(data.list[i].dt * 1000);
            const forecastDay = forecastDate.getDate();

            if (!seenDays.has(forecastDay)) {
                dailyForecasts.push(data.list[i]);
                seenDays.add(forecastDay);
            }
        }
    }

    // Display the forecasts
    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(forecast.main.temp);

        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <span class="forecast-day">${dayName}</span>
            <span class="forecast-temp">${temp}&deg;F</span>
        `;

        forecastContainer.appendChild(forecastItem);
    });
}

function displayWeatherError() {
    const tempElement = document.getElementById('current-temp');
    const descElement = document.getElementById('weather-desc');
    const forecastContainer = document.getElementById('forecast-container');

    if (tempElement) {
        tempElement.textContent = '--°F';
    }

    if (descElement) {
        descElement.textContent = 'Weather data unavailable';
    }

    if (forecastContainer) {
        forecastContainer.innerHTML = '<p>Forecast unavailable</p>';
    }
}

// ===================================
// Member Spotlights - Random Gold/Silver Members
// ===================================
async function fetchSpotlights() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const data = await response.json();
            displaySpotlights(data.members);
        } else {
            throw Error('Failed to load member data');
        }
    } catch (error) {
        console.error('Error fetching spotlights:', error);
        displaySpotlightError();
    }
}

function displaySpotlights(members) {
    const container = document.getElementById('spotlights-container');
    if (!container) return;

    // Filter for Gold (3) and Silver (2) members only
    const eligibleMembers = members.filter(member =>
        member.membershipLevel === 2 || member.membershipLevel === 3
    );

    // Randomly shuffle and pick 2-3 members
    const shuffled = eligibleMembers.sort(() => Math.random() - 0.5);
    const selectedMembers = shuffled.slice(0, 3);

    // Clear container
    container.innerHTML = '';

    // Create spotlight cards
    selectedMembers.forEach(member => {
        const membershipInfo = getMembershipInfo(member.membershipLevel);

        const card = document.createElement('div');
        card.className = 'spotlight-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" onerror="this.src='images/chamber-logo.png'">
            <div class="spotlight-info">
                <h3>${member.name}</h3>
                <span class="membership-badge ${membershipInfo.class}">${membershipInfo.text}</span>
                <p class="spotlight-phone">${member.phone}</p>
                <p class="spotlight-address">${member.address}</p>
                <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
        `;

        container.appendChild(card);
    });
}

function getMembershipInfo(level) {
    const levels = {
        1: { text: 'Member', class: 'member' },
        2: { text: 'Silver', class: 'silver' },
        3: { text: 'Gold', class: 'gold' }
    };

    return levels[level] || levels[1];
}

function displaySpotlightError() {
    const container = document.getElementById('spotlights-container');
    if (container) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Member spotlights unavailable</p>';
    }
}
