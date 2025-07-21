export let map;
export function initMap(lat, lng) {
  map = L.map('map', {
    center: [lat, lng],
    zoom: 13,
    scrollWheelZoom: true
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
}

export function updateMap(lat, lng) {
  if (map) {
    map.setView([lat, lng], 13);
  }
}