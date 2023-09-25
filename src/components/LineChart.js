// graphique en ligne

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer} from 'recharts';
import '../css/components/lineChart.css'
import { getUserAverageSessions } from '../services/UserService';

const dayMapping = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
};
  
function LineChartComponent({ userId }) {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const averageSessions = await getUserAverageSessions(userId);
  
        // Remplacez les chiffres par les premières lettres des jours
        const formattedData = averageSessions.map(session => ({
          ...session,
          day: dayMapping[session.day],
        }));
  
        setData(formattedData);
      }
  
      fetchData();
    }, [userId]);
    

    return (
        <div className="content-linechart">
            <h3>Durée moyenne des sessions</h3>
            <ResponsiveContainer width={270} height={264}>
              <LineChart width={270} height={250} data={data}>
                  <XAxis dataKey="day"  className='day' stroke='rgba(255, 255, 255, 0.504)'/>
                  <Line type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.504)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineChartComponent