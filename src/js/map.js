import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapOptions = {
    center: [53.385044, 27.486671],
    zoom: 5,
    worldCopyJump: true,
};

const map = new L.map('map', mapOptions);
const StadiaOutdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
});
map.addLayer(StadiaOutdoors);

const markerOptions = {
    title: 'MyLocation',
    clickable: true,
    draggable: true,
};

const marker = L.marker([53.385044, 27.486671], markerOptions);
marker.addTo(map);
marker.bindPopup('Location').openPopup();
marker.on('mouseover', () => {
    marker.openPopup();
});

const circle = L.circle([55.056287, 30.07572], 25000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
});
circle.addTo(map);

map.on('click', (e) => {
    new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
});
