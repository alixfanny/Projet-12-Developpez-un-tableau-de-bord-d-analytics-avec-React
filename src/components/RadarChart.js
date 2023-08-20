import React, { useState, useEffect } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import axios from 'axios';

function RadarChartComponent({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
                const mappedData = response.data.data.data.map(item => ({
                    kind: response.data.data.kind[item.kind],
                    value: item.value
                }));
                console.log(mappedData)
                setData(mappedData);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }

        fetchData();
    }, [userId]);

    return (
        <div className="content-radarchart">
          <RadarChart width={500} height={500} cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </div>
      );
}

export default RadarChartComponent