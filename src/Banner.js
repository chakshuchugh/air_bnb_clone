import React ,{useState} from 'react'
import './Banner.css';
import {Button} from "@mui/material";
import Search from "./Search"
import {useNavigate} from "react-router-dom";


function Banner() {
    const navigate=useNavigate();
    const [showSearch,setShowSearch] = useState(false);

  return (
    <div className="banner">
        <div className="banner_search_button">
        {showSearch && <Search/>};
            <Button  onClick={()=>setShowSearch(!showSearch)}>
               Search dates
            </Button>
        </div>
        <div className="banner_info">
            <h3>Get out and strech your imagination</h3>
            <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
            <Button  onClick={()=>navigate('/Search')}variant="outlined" >
               Explore Nearby
            </Button>
        </div>
    </div>
  )
}

export default Banner