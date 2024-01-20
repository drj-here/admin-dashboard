import React from 'react'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import './menu.css'

const Menu = ({ isOpen }) => {
  return (
    <div className={`menu ${isOpen ? "open" : "close"}`}>
    <div className='menu'>
      <span className='admin'>Skillify Admin</span>
      <div className='item'>

        <Link to="/" className='ListItem'>
        <HomeIcon/>
        <span className='ListItemTitle'>Dashboard</span>
        </Link>
        <Link to="/course" className='ListItem'>
        <PlayCircleOutlineIcon/>
        <span className='ListItemTitle'>My Course</span>
        </Link>
        <Link to="/calendar" className='ListItem'>
        <DateRangeIcon/>
        <span className='ListItemTitle'>Calendar</span>
        </Link>
        <Link to="/resource" className='ListItem'>
        <MenuBookIcon/>
        <span className='ListItemTitle'>Resource</span>
        </Link>
        <Link to="/quiz" className='ListItem'>
        <QuizIcon/>
        <span className='ListItemTitle'>Quiz</span>
        </Link>
        <Link to="/message" className='ListItem'>
        <ChatBubbleOutlineIcon/>
        <span className='ListItemTitle'>Message</span>
        </Link>
        <Link to="/status" className='ListItem'>
        <ShowChartIcon/>
        <span className='ListItemTitle'>My Status</span>
        </Link>
        <Link to="/wallet" className='ListItem'>
        <AccountBalanceWalletIcon/>
        <span className='ListItemTitle'>Wallet</span>
        </Link>
        <Link to="/account" className='ListItem'>
        <PersonAddAltIcon/>
        <span className='ListItemTitle'>My Account</span>
        </Link>

      </div>
      <div className='footer'>
        <span className='title'>Skillify Teacher Dashboard Admin</span>
        <span className='copyright'>@2020 All right reserved</span>
        </div>
    </div>
    </div>
  )
}

export default Menu