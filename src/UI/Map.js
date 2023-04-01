import "leaflet";
export class Map {
  constructor(coords) {
    
    this.renderMap(coords);
  }

  renderMap(coords) {
    const osmBase = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
    this.map = L.map("map", {
      center: [coords.lat, coords.long],
      zoom: 13,
      layers: [osmBase],
    });
    osmBase.addTo(this.map);
    L.marker([coords.lat, coords.long], 13).addTo(this.map);
  }
  reRender(coords) {
    console.log(coords)
    L.marker([coords.lat, coords.long], 13).addTo(this.map);
    this.map.setView([coords.lat, coords.long], 13)
  }
}
