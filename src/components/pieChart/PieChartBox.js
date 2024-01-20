import React from 'react'
import './pieChart.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Tooltip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { More } from '@mui/icons-material';

const renderLabel = (props) => {
    const { cx, cy, value, index } = props;
    const total = data.reduce((acc, cur) => acc + cur.value, 0);
    return (
      <text
        x={cx}
        y={cy}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {index === 0 ? `Total Sale: ${total}` :''}
      </text>
    );
  };
  

  
const data=[
    {
        name:"This week", value:2000,color:"#0088FE"
    },
    {
        name:"Last week", value:1500,color:"#FF8042"
    }
]

const PieChartBox = () => {
  return (
    <div className='pieChartBox'>
        <div className='title'>
        <h1 style={{color:"#4169E1"}}>Sale</h1>
        <MoreVertIcon style={{color:"black"}}/>
        </div>
        
        <div className='chart'>
        <ResponsiveContainer width="99%" height={300}>
        <PieChart>
            <Tooltip contentStyle={{background:"white",borderRadius:"5px"}}/>
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderLabel}
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
        
      </PieChart>
        </ResponsiveContainer>
        </div>
        <span className='btext'>This Week 2000</span>
        <br/>
        <span className='btext'>Last Week 1500</span>
    </div>
  )
}

export default PieChartBox