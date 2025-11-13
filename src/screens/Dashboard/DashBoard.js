import React, { useEffect, useState, useMemo } from 'react';
import { ref, onValue } from 'firebase/database'; // Import Firebase functions
import { database } from '../../firebaseConfig'; 
import Map from '../../components/Map';
import moment from 'moment/moment';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'; // Keep if needed for other APIs
import NavbarDash from '../../components/NavbarDash';
import { isThereMore } from './dashBoardRequests'; // Keep if used elsewhere
import ChatIcon from '../../components/chat_icon';
import { useNavigate } from 'react-router-dom';
import tekomente from '../../img/tekomente.png';
import mangotrace from '../../img/mangotrace.jpeg';
import LineChart from '../../components/Chart'; // Import LineChart directly

function DashBoard() {
  const [firebaseHourlyData, setFirebaseHourlyData] = useState({}); // Stores { "HH:00": totalWeight }
  const [loadingFirebaseData, setLoadingFirebaseData] = useState(true);
  const [firebaseError, setFirebaseError] = useState(null);

  const [tipoData, setTipoData] = useState('diario'); // Controls the *selection* for chart type
  const [position, setPosition] = useState([-1.4558, -48.5039]);
  const navigate = useNavigate();

  // Mocks (can be removed if you fully switch to Firebase data for everything)
  const mockAnual = { /* ... */ };
  const mockMensal = { /* ... */ };
  const mockDiario = { /* ... */ }; // This one might be replaced by firebaseHourlyData now


  // --- Firebase Data Fetching and Processing ---
  useEffect(() => {
    const today =  moment();
    // Referência APENAS para o dia específico
    const wasteRef = ref(database, 'lixeira/historico/'+today.format('YYYY-MM-DD')); 

    const unsubscribe = onValue(wasteRef, (snapshot) => {
      try {
        // Agora, 'timestampEntries' recebe diretamente o objeto de timestamps
        const timestampEntries = snapshot.val(); 
        const hourlyAggregatedData = {};

        // 1. Inicializa todas as horas de 0 a 23 com 0 peso
        for (let i = 0; i < 24; i++) {
          const hourKey = String(i).padStart(2, '0') + ':00';
          hourlyAggregatedData[hourKey] = 0;
        }

        if (timestampEntries) {
          // Itera diretamente sobre as chaves de timestamp (ex: '1762905600')
          const sortedTimestampKeys = Object.keys(timestampEntries).sort();
              
          sortedTimestampKeys.forEach(timestampKey => {
            const entry = timestampEntries[timestampKey]; // Acessa o objeto { hora: ..., peso: ... }

            // Os campos 'hora' e 'peso' são acessados diretamente da 'entry'
            if (entry && entry.hora !== undefined && entry.peso !== undefined) {
              const horaString = entry.hora;
              const peso = parseFloat(entry.peso);

              const hourOnly = parseInt(horaString.split(':')[0], 10);

              if (!isNaN(hourOnly) && hourOnly >= 0 && hourOnly <= 23) {
                const formattedHourKey = String(hourOnly).padStart(2, '0') + ':00';
                if (hourlyAggregatedData[formattedHourKey] < peso){
                hourlyAggregatedData[formattedHourKey] += peso;
                }
              } else {
                console.warn(`Invalid hour format or value in Firebase for entry ${timestampKey}: ${horaString}`);
              }
            }
          });
        }

        // 2. Final formatting to ensure 24 entries and fixed decimals
        const finalChartData = {};
        for (let i = 0; i < 24; i++) {
          const hourKey = String(i).padStart(2, '0') + ':00';
          finalChartData[hourKey] = parseFloat(hourlyAggregatedData[hourKey].toFixed(2));
        }

        setFirebaseHourlyData(finalChartData);
        setLoadingFirebaseData(false);

      } catch (err) {
        console.error("Error fetching or processing data:", err);
        setFirebaseError("Failed to load or process data.");
        setLoadingFirebaseData(false);
      }
    }, (err) => {
      console.error("Firebase read failed:", err);
      setFirebaseError("Failed to connect to database.");
      setLoadingFirebaseData(false);
    });

    return () => unsubscribe();
}, []); // Note: Se a data '2025-11-12' for dinâmica, ela deve estar no array de dependências.

  // Helper function to calculate total weight from the hourly aggregated data
  const getTotalWeight = (hourlyData) => {
    return Object.values(hourlyData).reduce((acc, weight) => acc + weight, 0).toFixed(2);
  };

  // Calculate current total weight from Firebase data
  const currentTotalWeight = useMemo(() => {
    return getTotalWeight(firebaseHourlyData)
  }, [firebaseHourlyData]);

  // --- Display logic for cards and chart based on firebaseHourlyData ---
  // You'll still need logic for "last month" and "this month" if your Firebase `teste_envio`
  // only contains recent data. For full historical data, you'd need more complex queries or a
  // different data structure in Firebase.
  const lastMonthWeight = 0; // Placeholder: Replace with actual historical data
  const thisMonthWeight = currentTotalWeight; // Uses the fetched data

  return (
    <div className='main'>
      <NavbarDash />
      <ChatIcon />
      <div className='selectContainer'>
        <select>
          <option value={'lixeira'}>Trocar lixeira</option>
          <option value={'lixeira2'}>Lixeira Cesupa</option>
        </select>
      </div>
      <div className="DashBoard">
        <div className='outerMapContainer'>
          <div className='chartanddash'>
            <div className='chart'>
              <div className="trashWarningBar">
                <h1 className="warningText">⚠ A lixeira não está cheia</h1>
              </div>

              <div className='monthCardsContainer'>
                <div className='monthCard'>
                  <h1 className='monthCardTitle'>{lastMonthWeight}kg</h1>
                  <h2>Mês passado</h2>
                </div>
                <div className='monthCard'>
                  <h1 className='monthCardTitle'>{thisMonthWeight}kg</h1>
                  <h2>Esse mês</h2>
                </div>
                <div className='monthCard'>
                  <h1>Foram coletados {(parseFloat(thisMonthWeight) - parseFloat(lastMonthWeight)).toFixed(2)}kg {parseFloat(thisMonthWeight) > parseFloat(lastMonthWeight) ? 'a mais' : 'a menos'} que mês passado</h1>
                </div>
              </div>

              <h1>Dados de coleta</h1>
              <div className='selectContainer'>
                <select onChange={(e) => setTipoData(e.target.value)} value={tipoData}>
                  {/* Anual e mensal explodiram!! hehe >< */}
                  <option value="anual">Anual</option>
                  <option value="mensal">Mensal</option>
                  <option value="diario">Diário</option>
                </select>
              </div>
              <div className="outerChartContainer">
                <div className="chartContainer">
                  {loadingFirebaseData ? (
                    <div>Carregando dados do gráfico...</div>
                  ) : firebaseError ? (
                    <div>Erro ao carregar gráfico: {firebaseError}</div>
                  ) : Object.keys(firebaseHourlyData).length === 0 ? (
                    <div>Nenhum dado de peso disponível para o gráfico.</div>
                  ) : (
                    <LineChart data={firebaseHourlyData} />
                  )}
                </div>
              </div>
            </div>

            <div className='tripleContainer'>
              <div className='chartanddash'>
                <div>
                  <h1>Localização da Lixeira</h1>
                  <div className="mapContainer">
                    <Map position={position} />
                  </div>
                </div>
                <div className='mapSideContent'>
                  <button className='button' onClick={() => {
                    navigate('/chat-interface', {
                      state: {
                        hourlyData: firebaseHourlyData,
                        diarioTotal: currentTotalWeight,
                        mensal: null, // Replace with actual monthly total
                        anual: null // Replace with actual annual total
                      }
                    });
                  }}>Analisar métricas com TekoMente</button>
                  <div className='imageContainer'>
                    <img src={tekomente} alt="TekoMente Logo" className='tekoimg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='outerChartContainer'>
            <h1>Quer mais métricas sobre o seu lixo? Acesse o MangTrace!</h1>
            <div className='chartanddash'>
              <img src={mangotrace} alt="MangoTrace Logo" className='mangoimg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;