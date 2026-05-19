// CREAR MAPA

const map = L.map('map').setView([4.6097, -74.0817], 12);

// CARGAR MAPA

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; OpenStreetMap'

}).addTo(map);


// MARCADORES

L.marker([4.6097, -74.0817])
.addTo(map)
.bindPopup("Hospital Central Bogotá");


L.marker([4.6486, -74.2479])
.addTo(map)
.bindPopup("Campaña Donación Kennedy");


L.marker([4.7110, -74.0721])
.addTo(map)
.bindPopup("Banco de Sangre Norte");
