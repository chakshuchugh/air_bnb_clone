import React from 'react'
import './Header.css';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";


function Header() {
  return (
    <div className="header">
        <Link to='/'>
        <img  className="header_icon"  src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
        </Link>
    <div className="Header_center">
        <input type='text'></input>
        <SearchIcon/>
    </div>
    <div className="Header_right">
        <p>Become a Host</p>
        <PublicIcon/>
        <KeyboardArrowDownIcon/>
        <AccountCircleIcon/>
    </div>
    </div>
   
  )
}

export default Header