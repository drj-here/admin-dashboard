import React from 'react'
import './student.css'
import { studentQueries } from '../../data';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const StudentBox = () => {
  return (
    <div>
        <div className='stats'>
            <div className='title'>
        <h1 style={{color:"#4169E1"}}>Student Queries</h1>
        <MoreVertIcon style={{color:"black"}}/>
        </div>
        <div className='list'>
            {studentQueries.map(elem=>(
                <div className='listItem' key={elem.id}>
                    <div className='user'>
                        <img src={elem.img} alt=''/>
                        <div className='userTexts'>
                            <span className='username'> {elem.query}</span>
                            <span className='dept'>{elem.username}</span>
                        </div>
                        </div>
                        <div>
                        <button className='buttonA'>{elem.stat}</button>
                        <button className='buttonD'>Decline</button>
                        </div>
                        </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default StudentBox