// Celsius
let temp = 10;
// km/hr
let wind = 5;

const windChillElemt = document.querySelector('#windChill');

const calculateWindChill = (temperature, windSpeed) => {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

if (temp <= 10 && wind > 4.8) {
    windChillElemt.textContent = `${calculateWindChill(temp, wind).toFixed(1)} °C`;
} else {
    windChillElemt.textContent = 'N/A';
}