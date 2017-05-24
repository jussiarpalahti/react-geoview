import React, { Component } from 'react';

import { Map, Marker, Popup, TileLayer, FeatureGroup } from 'react-leaflet';

class OneMap extends Component {

  render() {
    const position = [60.162059, 24.945831]; // Default to Helsinki's center
    const bounds = [
      [59.9, 24.59],  // SouthWest corner
      [60.43, 25.3]  // NorthEast corner
    ];

    return (
      <Map center={position} zoom={14} minZoom={8} maxZoom={15} zoomControl={true} maxBounds={bounds}>
        <TileLayer
          url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

/*
<FeatureGroup
  ref={(input) => {
    if (!input) return;
    const bounds = input.leafletElement.getBounds();
    if (bounds.isValid()) {
      input.props.map.fitBounds(bounds);
      const viewportBounds = [
        [59.9, 24.59],  // SouthWest corner
        [60.43, 25.3]  // NorthEast corner
      ];  // Wide Bounds of City of Helsinki area
      input.props.map.setMaxBounds(viewportBounds);
    }
  }}
>{contents}</FeatureGroup>
*/

class App extends Component {
  render() {
    return (
      <div id="map">
        <OneMap />
      </div>
    );
  }
}

export default App;
