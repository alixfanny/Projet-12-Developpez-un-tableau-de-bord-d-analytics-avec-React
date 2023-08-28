// diagramme en cercle

import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, Text } from 'recharts';
import axios from 'axios';
import "../css/components/radialBarChart.css"
import { getUserScore } from '../services/UserService';

function RadialBarChartComponent({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const score = await getUserScore(userId);
           setData([{value : score}]) 
        }

        fetchData();
    }, [userId]);

    return (
        <div className="content-radialbarchart">
            <h3>Score</h3>
            <RadialBarChart width={250} height={250} cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background={{ fill: '#fbfbfb' }}
                clockWise={true}
                dataKey={(entry) => entry.value}
                fill='#E60000'
                />
                <Text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#000000">
                    {`${data[0]?.value || 0}% de votre objectif`}
                </Text>
            </RadialBarChart>
        </div>
        );
}

export default RadialBarChartComponent