import React, { useState, useEffect } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../css/components/radarBarChart.css';
import { getUserPerformance } from '../services/UserService';

const kindMapping = {
  cardio: 'cardio',
  energy: 'énergie',
  endurance: 'endurance',
  strength: 'force',
  speed: 'vitesse',
  intensity: 'intensité',
};

function RadarChartComponent({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const performance = await getUserPerformance(userId);

      // Remplacez les valeurs "kind" par leur équivalent en français
      const formattedData = performance.map(item => ({
        kind: kindMapping[item.kind] || item.kind, // Utilisez la traduction française si elle existe, sinon conservez la valeur d'origine
        value: item.value,
      }));

      setData(formattedData);
    }

    fetchData();
  }, [userId]);

    return (
        <div className="content-radarchart">
          <ResponsiveContainer width={270}>
            <RadarChart width={270} height={250} cx="50%" cy="50%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="kind" />
              <PolarRadiusAxis />
              <Radar  dataKey="value" fill="#e60000" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      );
}

export default RadarChartComponent