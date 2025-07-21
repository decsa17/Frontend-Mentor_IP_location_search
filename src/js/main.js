import { initMap, updateMap } from './map.js';
import { fetchIpData } from './api.js';


// DOM elements
const ipInput = document.getElementById('ip-input');
const submitButton = document.getElementById('submit-button');
const addressElement = document.getElementById('address');
const locationElement = document.getElementById('location');
const timeZoneElement = document.getElementById('timezone');
const IspElement = document.getElementById('isp');

// Initial map setup
let lat = 14.5995, lng = 120.9842;
initMap(lat, lng);

// Search event
submitButton.addEventListener('click', () => {
  fetchIpData(ipInput.value)
    .then(data => {
      const { ip, isp, location: { city, region, postalCode, timezone, lat, lng } } = data;
      updateMap(lat, lng);
      addressElement.textContent = ip;
      locationElement.textContent = `${city}, ${region} ${postalCode}`;
      timeZoneElement.textContent = `UTC ${timezone}`;
      IspElement.textContent = isp;
    })
    .catch(error => {
      console.error('Error fetching IP data:', error);
      addressElement.textContent = 'Not found';
      locationElement.textContent = '';
      timeZoneElement.textContent = '';
      IspElement.textContent = '';
    });
});