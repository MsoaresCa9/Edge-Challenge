const url = 'http://172.17.0.2:3306/sensor_data';
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const lightElement = document.getElementById('light');

fetch(url)
    .then(response => response.json())
    .then(data => {
        VelocidadeElement.textContent = `${data.temperature}°C`;
        TemperaturaElement.textContent = `${data.humidity}%`;
        EnergiaElement.textContent = `${data.light}%`;
    })
    .catch(error => console.error('Error:', error));