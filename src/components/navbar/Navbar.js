import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className='logo'>
            <span style={{color:"black"}}>Hello Mad</span>
        </div>
        <div className='icons'>
            <input type='text' placeholder='   search here' className='icon-search'/>
            <button className='iconb'>New Upload</button>
            <div className='notification'>
            <img src='/notification.svg' alt=''/>
            <span>2</span>
            </div>
            <img src='/message' alt='' className='icon'/>
            <img src='/chart' alt='' className='icon'/>
            <div className='user'>
            <span style={{color:"black"}}>TheMad  </span>
                <img src='https://imgs.search.brave.com/VDBd2y-MpXvTbZAprPnQudkEonZhZ2Jx7lSgDDjzSoc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZm90by5jb20v/Y2RuLzA1MzE0OWUv/Y29udGVudGFzc2V0/cy9kMzkzNDkzNDRk/MDA0ZjliODk2M2Rm/MTU1MWYyNGJmNC9w/cm9mb3RvLWFsYmVy/dC13YXRzb24tc3Rl/dmUtam9icy1waW5u/ZWQtaW1hZ2Utb3Jp/Z2luYWwuanBnP3dp/ZHRoPTEyODAmcXVh/bGl0eT03NSZmb3Jt/YXQ9anBn' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Navbar