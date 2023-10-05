// graphique en barre

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../css/components/barChart.css';
import { getUserActivity } from '../services/UserService';

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

function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className='tooltip'>
                <p className='legend-tooltip'>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
}

function extractDay(dateString) {
    const date = new Date(dateString);
    return date.getDate();  // retourne le jour du mois
}

function BarChartComponent({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const activity = await getUserActivity(userId);
            setData(activity);
            console.log(activity)
        }

        fetchData();
    }, [userId]);

    const isLargeScreen = window.innerWidth > 1024;
    const marginClass = isLargeScreen ? 'large-screen' : 'small-screen';

    return (
        <div className="content-barchart">
            <h3 className='barchart-title'>Activité quotidienne</h3>
            <ResponsiveContainer height={250} width={750}>
                <BarChart
                    width={1100}
                    height={250}
                    data={data}
                    className={marginClass}
                    margin={{ top: 50, right: -350, left: 45, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="day" tickFormatter={extractDay} />
                    <YAxis dataKey="kilogram" orientation="right" yAxisId="kilogram" domain={['dataMin - 1', 'dataMax + 1']} allowDecimals={false} />
                    <YAxis dataKey="calories" orientation="right" yAxisId="calories" hide />
                    <Tooltip content={<CustomTooltip />}/>
                    <Legend content={<CustomLegend/>} className='legend' layout="vertical" verticalAlign="top" align="right"/>
                    <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} maxBarSize={10} yAxisId="kilogram"/>
                    <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} maxBarSize={10} yAxisId="calories"/>
                </BarChart>
            </ResponsiveContainer>    
        </div>
    );
}

export default BarChartComponent;
