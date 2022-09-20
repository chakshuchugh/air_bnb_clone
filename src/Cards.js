import React from 'react'
import './Card.css';

function Cards({src,title,description,price}) {
  return (
    <div className="card">
      <div className="cardpic">
      <img src={src} alt=""/>
      </div>
      <div className="cardinfo">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
        </div>
    </div>
  )
}

export default Cards