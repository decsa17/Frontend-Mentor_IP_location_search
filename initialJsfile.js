

// get the IP input from the user
const ipInput = document.getElementById('ip-input');
const submitButton = document.getElementById('submit-button');

// get target elements
const addressElement = document.getElementById('address');
const locationElement = document.getElementById('location');
const timeZoneElement = document.getElementById('timezone');
const IspElement = document.getElementById('isp');


// IPify Geolocation REST API 

const ApiKey = "at_fYNvLhS9wXofTSIVPhM93UNWUh1lN";

//declare JSON variables
let ip, isp, city, region, postalCode, timezone, lat = 14.5995, lng = 120.9842;

// LeafletJS code
var map = L.map('map', {
    center: [lat, lng],
    zoom: 13,
    scrollWheelZoom: true
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// When user clicks the search button
submitButton.addEventListener('click', () => {

    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${ApiKey}&ipAddress=${ipInput.value}`;

    // Fetch IP geolocation data
    fetch(url)
      .then(response => response.json())
      .then(data => {


        ({ ip, isp, location: { city, region, postalCode, timezone, lat, lng } } = data);

        map.setView([lat, lng], 13);
        addressElement.textContent = ip;
        locationElement.textContent = `${city}, ${region} ${postalCode}`;
        timeZoneElement.textContent = `UTC ${timezone}`;
        IspElement.textContent = `${isp}`;
      })
      .catch(error => console.error('Error fetching IP data:', error));
});