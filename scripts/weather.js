// OpenWeatherMap API - Current Weather Data
// Location: Trier, Germany (Porta Nigra)

// Select HTML elements that will be manipulated
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL with query parameters
// TODO: Replace 'YOUR_API_KEY_HERE' with your actual OpenWeatherMap API key
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=YOUR_API_KEY_HERE';

// Asynchronous function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only - view data in console
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the weather data
function displayResults(data) {
    // Display temperature rounded to nearest whole number
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    // Get weather icon code and build image URL
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Get weather description
    let desc = data.weather[0].description;

    // Set image attributes
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Display weather description
    captionDesc.textContent = desc;
}

// Invoke the API fetch function
apiFetch();
