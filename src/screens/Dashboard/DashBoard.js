import React, { useEffect, useState } from 'react';
import ColumnChart from '../../components/Chart';
import Map from '../../components/Map'
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import NavbarDash from '../../components/NavbarDash'
import { isThereMore } from './dashBoardRequests';
function DashBoard() {
  const[trashData, setTrashData] = useState({})

  useEffect(() => {
    axios.get('http://18.222.85.156:8000/trashLog/')
    .then(response => {
      const data = response.data;
      const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const groupedData = data.reduce((acc, item) => {
        if (item.weight !== null) {
          const date = new Date(item.date);
          const month = date.getMonth();
          const weights = item.weight.split(',').map(Number);
          const totalWeight = weights.reduce((a, b) => a + b, 0);
          acc[month] = (acc[month] || 0) + totalWeight;
          acc[month] = parseFloat(acc[month].toFixed(2));
        }
        return acc;
      }, {});
  
      setTrashData(groupedData);
      console.log(groupedData)
    });
  }, []);
  return (

    <div className='main'>
      <NavbarDash />
      <div className='selectContainer'>
      <select>
          <option value={"lixeira"}>Trocar lixeira</option>
          <option value={"lixeira2"}>Lixeira Combú</option>
        </select>
      </div>
        <div className="DashBoard">
          <div className='chartanddash'>
            <div className='chart'>  
              <h1>Dados de coleta</h1>
              <div className="outerChartContainer">
                <div className="chartContainer">
                <ColumnChart />
                </div>
            </div>         
          </div>
          <div className='chart'>
            <h1>Localização da lixeira</h1>
            <div className="outerMapContainer">
              <div className="mapContainer">
                <Map />
            </div>
          </div>
        </div>
      </div>
      <div className='chartanddash'>
        <div className='monthCard'>
          <h1>Mês passado</h1>
            <h2>{trashData[4]}kg</h2>
        </div>
        <div className='monthCard'>
        <h1>Esse mês</h1>
        <h2>{trashData[5]}kg</h2>
      </div>
        <div className='monthCard'>
            <h2>{isThereMore(trashData)}</h2>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default DashBoard;
