import React from 'react'
import './bigChartBox.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
const data = [
    {
      name: 'Jan',
      ml: 4000,
      dev: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      ml: 3000,
      dev: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      ml: 2000,
      dev: 6800,
      amt: 2290,
    },
    {
      name: 'Apr',
      ml: 2780,
      dev: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      ml: 1890,
      dev: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      ml: 2390,
      dev: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      ml: 2490,
      dev: 4300,
      amt: 2100,
    },
    {
        name: 'Aug',
        ml: 3000,
        dev: 1398,
        amt: 2210,
      },
      {
        name: 'Sep',
        ml: 1000,
        dev: 9800,
        amt: 2290,
      },
      {
        name: 'Oct',
        ml: 1780,
        dev: 3908,
        amt: 2000,
      },
      {
        name: 'Nov',
        ml: 3230,
        dev: 6800,
        amt: 2181,
      },
      {
        name: 'Dec',
        ml: 3323,
        dev: 7800,
        amt: 2500,
      }
  ];

const BigChartBox = () => {
  return (
    <div className='bigChartBox'>
        <div className='header'>
          <div className='title'>
            <h1 style={{color:"#4169E1"}}>Revenue</h1>
            <TrendingUpIcon style={{background:"rgba(189, 189, 3, 0.103)",padding:"2px"}}/>
            </div>
            <div className='options'>
                
                <span>Course visit</span>
                <div className='dot' style={{backgroundcolor:"#8884d8"}}/>
                <span>Course sale</span>
                <div className='dot' style={{backgroundcolor:"black"}}/>
                
            </div>
        </div>
        <div className='chart'>
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"transparent",border:"nodev"}}/>
          <Area type="monotone" dataKey="ml" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="dev" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BigChartBox