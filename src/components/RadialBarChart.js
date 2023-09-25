// diagramme en cercle

import React, { useState, useEffect } from 'react';
import "../css/components/radialBarChart.css";
import { getUserData } from '../services/UserService';
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

export default function RadialBarChartComponent({ userId }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const userData = await getUserData(userId);
      setScore(userData.score * 100);
    }

    fetchData();
  }, [userId]);


  return (
    <div className="container">
      <div className="content-radialbarchart">
      <h3>score</h3>
      <ResponsiveContainer width={270} height={292}>
        <RadialBarChart width={270} height={300} cx={120} cy={141} innerRadius={80} barSize={10} data={[{ value: score }, { value: 100, fill:"#fbfbfb" }]}  startAngle={150} endAngle={-370}>
          <RadialBar
            fill="#ff0000"
            clockWise={true}
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
      <div className='center'>
        <p className='pourcentage'>
          {`${score}%`}
        </p>
        <p className='text'>de votre objectif</p>
      </div>
    </div>
  );
}