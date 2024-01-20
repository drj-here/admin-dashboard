import React from 'react'
import WeeklySales from '../../components/weeklystats/WeeklySales'
import StudentBox from '../../components/student/StudentBox'
import ChartBox from '../../components/chartBox/ChartBox'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import './home.css'
import { barChartBoxVisit, chart1,chart2,chart3,chart4 } from '../../data'
import PieChartBox from '../../components/pieChart/PieChartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'
import Course from '../../components/course/Course'

const home = () => {
  return (
    <div className='home'>
        <div className='box box1'><ChartBox {...chart1}/></div>
        <div className='box box2'><ChartBox {...chart2}/></div>
        <div className='box box3'><ChartBox {...chart3}/></div>
        <div className='box box4'><ChartBox {...chart4}/></div>
        <div className='box box5'><BigChartBox/></div>
        <div className='box box6'><BarChartBox {...barChartBoxVisit}/></div>
        <div className='box box7'><PieChartBox/></div>
        <div className='box box8'><WeeklySales/></div>
        <div className='box box9'><StudentBox/></div>
        <div className='box box10'><Course/></div>
    </div>
  )
}

export default home