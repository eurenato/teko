import React from 'react';
import ColumnChart from '../../components/Chart';
import Map from '../../components/Map'
import 'leaflet/dist/leaflet.css';
import NavbarDash from '../../components/NavbarDash'

function DashBoard() {
  return (

    <div className='main'>
      <NavbarDash />
        <div className="DashBoard">
        <h1>Dados de coleta</h1>
          <div className="outerChartContainer">
              <div className="chartContainer">
              <ColumnChart />
              </div>
          </div>
          <h1>Localização da lixeira</h1>
          <div className="outerMapContainer">
            <div className="mapContainer">
              <Map />
            </div>
        </div>
      </div>
  </div>
    
  );
}

export default DashBoard;
