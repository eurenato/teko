import React from 'react';
import ColumnChart from '../components/Chart';
import Map from '../components/Map'
import 'leaflet/dist/leaflet.css';
import NavbarDash from '../components/NavbarDash'


function DashBoard() {
  return (

    <><NavbarDash />
      <div className="DashBoard">
        <div className="outerChartContainer">
            <div className="chartContainer">
              <ColumnChart />
            </div>
        </div>
          <div className="outerMapContainer">
            <div className="mapContainer">
              <Map />
            </div>
        </div>
      </div>
    </>
    
  );
}

export default DashBoard;
