import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MyMap() {
  const position = [-1.4557549, -48.4901799];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "300px", width: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Belém, Pará, Brasil
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
