import React, { Component } from 'react';

import { Map, Marker, Popup, TileLayer, FeatureGroup } from 'react-leaflet';

class OneMap extends Component {

  render() {
    const position = [60.172059, 24.945831]; // Default to Helsinki's center
    const bounds = [
      [59.9, 24.59],  // SouthWest corner
      [60.43, 25.3]  // NorthEast corner
    ];

    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          minZoom={10} maxZoom={16} zoomControl={true}
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


const fetch_places = () => {
    fetch('//localhost:9000/place_data/').then(function(response) {
        // Convert to JSON
        return response.json();
    }).then(function(data) {
        // Yay, `j` is a JavaScript object
        console.log(data);
        return data;
    });
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {places: false};
    }

    get_data() {
        this.setState({places: fetch_places()});
    }

    componentDidMount() {
        this.get_data();
    }

    render() {
        return (
          <div id="map">
            <OneMap />
          </div>
        );
    }
}

export default App;
