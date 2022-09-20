import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
function SearchResult({ img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
  return (
    <div className="searchResult">
         <img src={img} alt="" />
         <FavoriteBorderIcon className="searchResultHeart"/>
         <div className="searchResult_info">
            <div className="searchResult_infoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>_____</p>
                <p>{description}</p>
            </div>
            <div className="searchResult_infoBottom">
                <div className="searchResult_star">
                <StarIcon className="Staricon"/>
                <p><strong>{star}</strong></p>
                </div>
                <div className="searchResult_price">
                <h2>{price}</h2>
                <p>{total}</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default SearchResult