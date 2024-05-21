import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

import axios from 'axios';

function MyMap() {
  const [position, setPosition] = useState([-1.489572059746894, -48.455529902548946]);
  return (
    <MapContainer center={position} zoom={20} style={{ height: "300px", width: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;