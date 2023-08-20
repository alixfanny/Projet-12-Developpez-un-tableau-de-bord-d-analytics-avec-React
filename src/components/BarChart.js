// graphique en barre

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import '../css/components/barChart.css';

function CustomLegend() {
    return (
        <div className='legend'>
            <span className='kg'></span>
            <p>Poids (kg)</p>
            
            <span className='kcal'></span>
            <p>Calories brûlées (kCal)</p>
        </div>
    );
}

function BarChartComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/user/12/activity');
                setData(response.data.data.sessions);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="content-barchart">
            <h2 className='barchart-title'>Activité quotidienne</h2>
            <BarChart
                width={500}
                height={500}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis dataKey="kilogram" />
                <Tooltip />
                <Legend content={<CustomLegend/>} />
                <Bar dataKey="kilogram" fill="#282D30" />
                <Bar dataKey="calories" fill="#E60000" />
            </BarChart>
        </div>
    );
}

export default BarChartComponent;
