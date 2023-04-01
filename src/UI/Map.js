import "leaflet";
export class Map {
  constructor(coords) {
    
    this.renderMap(coords);
  }

  setMarker(coords){
    if(this.marker){
        this.map.removeLayer(this.marker)
    }
    this.marker = L.marker([coords.lat, coords.long], 13).addTo(this.map);
  }

  renderMap(coords) {
    const osmBase = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
    this.map = L.map("map", {
      center: [coords.lat, coords.long],
      zoom: 13,
      layers: [osmBase],
    });
    osmBase.addTo(this.map);
    this.setMarker(coords)
  }
  reRender(coords) {
    console.log(coords)
    this.setMarker(coords)
    this.map.setView([coords.lat, coords.long], 13)
  }
}
