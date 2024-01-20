import React from 'react'
import { weeklystats } from '../../data'
import './Weekly.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const WeeklySales = () => {
  return (
    <div className='stats'>
        <div className='title'>
        <h1 style={{color:"#4169E1"}}>Weekly Sales Stats</h1>
        <MoreVertIcon style={{color:"black"}}/>
        </div>
        <div className='list'>
            {weeklystats.map(elem=>(
                <div className='listItem' key={elem.id}>
                    <div className='user'>
                        <img src={elem.img} alt=''/>
                        <div className='userTexts'>
                            <span className='username'> {elem.course}</span>
                            <span className='dept'>{elem.dept}</span>
                        </div>
                        </div>
                        <span className='amount'>${elem.amount}</span>
                        </div>
            ))}
        </div>
    </div>
  )
}

export default WeeklySales