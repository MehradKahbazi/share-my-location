import 'leaflet';
export class Map {
    constructor(coords) {
        this.render(coords)
    }

    render(coords) {
        var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
        const map = L.map('map', {
            center: [coords.lat, coords.long],
            zoom: 13,
            layers: [osmBase]
        })
        osmBase.addTo(map);
        L.marker([coords.lat, coords.long], 13).addTo(map);
    }
}