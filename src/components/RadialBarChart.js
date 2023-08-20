// diagramme en cercle

import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, Legend, } from 'recharts';
import axios from 'axios';

function RadialBarChartComponent({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}`);
                const scoreData = [{ name: 'Score', value: response.data.data.score * 100 }];
                setData(scoreData);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }

        fetchData();
    }, [userId]);

    return (
        <div className="content-radialbarchart">
            <h3>Score</h3>
            <RadialBarChart width={500} height={500} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="value"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle"  />
            </RadialBarChart>
        </div>
        );
}

export default RadialBarChartComponent