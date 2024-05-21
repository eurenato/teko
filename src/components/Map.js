import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

function MyMap() {
  const [position, setPosition] = useState([-1.489572059746894, -48.455529902548946]);

  useEffect(() => {
    axios.get('http://13.59.94.236:8000/trashLocation/')
      .then(response => {
        const data = response.data[0];
        console.log(data)
        // Supondo que os dados tenham campos de latitude e longitude
        setPosition([data.latitude, data.longitude]);
      })
      .catch(error => {
        console.error("Erro ao buscar dados", error);
      });
  }, []);

  return (
    <MapContainer center={position} zoom={20} style={{ height: "300px", width: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A posição retornada pela API
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
