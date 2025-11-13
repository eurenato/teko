// src/components/WasteWeightTracker.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebaseConfig'; // Adjust the path as needed
import LineChart from '../components/Chart'; // Adjust the path as needed

function WasteWeightTracker({ onDataFetched }) {
  const [chartData, setChartData] = useState({}); // This will store { "HH:00": totalWeight }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const wasteRef = ref(database, 'lixeira/teste_envio');

    const unsubscribe = onValue(wasteRef, (snapshot) => {
      try {
        const data = snapshot.val();
        // Initialize an object to hold aggregated weight per hour
        const hourlyAggregatedData = {};

        // Initialize all hours from 0 to 23 with 0 weight
        for (let i = 0; i < 24; i++) {
          const hourKey = String(i).padStart(2, '0') + ':00'; // Format as "00:00", "01:00", etc.
          hourlyAggregatedData[hourKey] = 0;
        }

        if (data) {
          Object.keys(data).forEach(timestampKey => {
            const entry = data[timestampKey];
            if (entry && entry.hora !== undefined && entry.pesoTotal !== undefined) {
              const horaString = entry.hora; // e.g., "11:11:52"
              const peso = parseFloat(entry.pesoTotal); // Ensure it's a number

              // Extract the hour part (e.g., 11 from "11:11:52")
              const hourOnly = parseInt(horaString.split(':')[0], 10);

              // Validate hour and add to aggregation
              if (!isNaN(hourOnly) && hourOnly >= 0 && hourOnly <= 23) {
                const formattedHourKey = String(hourOnly).padStart(2, '0') + ':00';
                hourlyAggregatedData[formattedHourKey] += peso;
              } else {
                console.warn(`Invalid hour format or value in Firebase for entry ${timestampKey}: ${horaString}`);
              }
            }
          });
        }

        // Format aggregated data to have exactly 24 entries (00:00 to 23:00)
        const finalChartData = {};
        for (let i = 0; i < 24; i++) {
          const hourKey = String(i).padStart(2, '0') + ':00';
          // Ensure weights are formatted to 2 decimal places if you want
          finalChartData[hourKey] = parseFloat(hourlyAggregatedData[hourKey].toFixed(2));
        }

        setChartData(finalChartData);
        if (onDataFetched) {
          onDataFetched(finalChartData); // Pass the aggregated data up
        }
        setLoading(false);

      } catch (err) {
        console.error("Error fetching or processing data:", err);
        setError("Failed to load or process data.");
        setLoading(false);
        if (onDataFetched) {
          onDataFetched({}); // Pass empty data on error
        }
      }
    }, (err) => {
      console.error("Firebase read failed:", err);
      setError("Failed to connect to database.");
      setLoading(false);
      if (onDataFetched) {
        onDataFetched({}); // Pass empty data on Firebase error
      }
    });

    return () => unsubscribe();
  }, [onDataFetched]);

  if (loading) {
    return <div>Carregando dados...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  // Still check if data is completely empty (though it should have 24 entries now)
  if (Object.keys(chartData).length === 0) {
    return <div>Nenhum dado de peso encontrado para o gráfico.</div>;
  }

  return <LineChart data={chartData} />;
}

export default WasteWeightTracker;