function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('windSpeed');
const windChillElement = document.getElementById('windChill');
const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

currentYearElement.textContent = new Date().getFullYear();

lastModifiedElement.textContent = document.lastModified;