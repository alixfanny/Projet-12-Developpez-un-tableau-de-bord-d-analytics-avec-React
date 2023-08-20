// graphique en ligne

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis } from 'recharts';
import axios from 'axios';

function LineChartComponent({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
                setData(response.data.data.sessions);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }

        fetchData();
    }, [userId]);

    return (
        <div className="content-linechart">
            <h3>Durée moyenne des sessions</h3>
            <LineChart width={300} height={100} data={data}>
                <XAxis dataKey="day" />
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </div>
    );
}

export default LineChartComponent