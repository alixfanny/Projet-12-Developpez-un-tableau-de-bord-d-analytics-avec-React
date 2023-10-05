// graphique en ligne

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, Rectangle} from 'recharts';
import '../css/components/lineChart.css'
import { getUserAverageSessions } from '../services/UserService';
import {PropTypes} from 'prop-types';
import { MappingDay } from '../services/DataTransformer';

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
      return (
        <div className='tooltip'>
          <p className='legend-tooltip'>{`${payload[0].value}min`}</p>
        </div>
      );
  }

  return null;
}

function Cursor(){
  const CustomCursor = (prop) => {
    const { width, points } = prop;
    const X = points[0].x;
    const distanceToRight = width - X;
    const rectWidth = Math.min(distanceToRight, 500);
    return (
      <Rectangle
        width={rectWidth}
        height={210}
        x={X}
        y={0}
        style={{ background: 'red', opacity: 0.1 }}
      />
    );
  };
  
  
  CustomCursor.propTypes = {
    prop: PropTypes.shape({
      width: PropTypes.number.isRequired,
      points: PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }),
  };
}

function LineChartComponent({ userId }) {
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
            <ResponsiveContainer width={270} height={264}>
              <LineChart width={270} height={250} data={data}>
                  <XAxis dataKey="day"  className='day' stroke='rgba(255, 255, 255, 0.504)' tickFormatter={MappingDay}/>
                  <Tooltip content={<CustomTooltip/>} cursor={<Cursor/>} />
                  <Line type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.504)" strokeWidth={2} dot={{r:0}} activeDot={{stroke: "white", strokeWidth:10, r:5}}/>
                  
              </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineChartComponent