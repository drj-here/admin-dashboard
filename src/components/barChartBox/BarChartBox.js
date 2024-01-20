// BarChartBox.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './barchartbox.css';

const BarChartBox = ({ title, color, dataKey, chartData }) => {
  return (
    <div className='barChartBox'>
      <h1 style={{ color:"#4169E1" }}>{title}</h1>
      <div className='chart'>
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ background: "#4681f4", borderRadius: "1px" }}
              labelStyle={{ display: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
