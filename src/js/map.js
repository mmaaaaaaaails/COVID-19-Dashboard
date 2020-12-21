import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';

require('leaflet/dist/images/marker-icon-2x.png');
require('leaflet/dist/images/marker-icon.png');
require('leaflet/dist/images/marker-shadow.png');

const mapOptions = {
    center: [53.385044, 27.486671],
    zoom: 5,
    worldCopyJump: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: 'topleft',
    },
};

const map = new L.Map('map', mapOptions);
const StadiaOutdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
});
map.addLayer(StadiaOutdoors);

const markerOptions = {
    title: 'MyLocation',
    clickable: true,
    draggable: true,
};

let marker = L.marker([53.385044, 27.486671], markerOptions).bindPopup('Location');
marker.addTo(map);
map.on('click', (e) => {
    if (marker !== null) {
        map.removeLayer(marker);
    }
    marker = L.marker(e.latlng).addTo(map);
});

map.invalidateSize();
