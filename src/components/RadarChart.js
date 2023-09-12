import React, { useState, useEffect } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import '../css/components/radarBarChart.css';
import { getUserPerformance } from '../services/UserService';

function RadarChartComponent({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const performance = await getUserPerformance(userId)
            setData(performance)
        }

        fetchData();
    }, [userId]);

    return (
        <div className="content-radarchart">
          <RadarChart width={250} height={250} cx="50%" cy="50%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar  dataKey="value" fill="#e60000" fillOpacity={0.6} />
          </RadarChart>
        </div>
      );
}

export default RadarChartComponent