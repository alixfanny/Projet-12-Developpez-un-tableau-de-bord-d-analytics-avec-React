// graphique en ligne

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis } from 'recharts';
import '../css/components/lineChart.css'
import { getUserAverageSessions } from '../services/UserService';

function LineChartComponent({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const averageSessions = await getUserAverageSessions(userId);
            setData(averageSessions);
        }

        fetchData();
    }, [userId]);

    return (
        <div className="content-linechart">
            <h3>Durée moyenne des sessions</h3>
            <LineChart width={250} height={250} data={data}>
                <XAxis dataKey="day"  className='day' stroke='rgba(255, 255, 255, 0.504)'/>
                <Line type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.504)" strokeWidth={2} />
            </LineChart>
        </div>
    );
}

export default LineChartComponent