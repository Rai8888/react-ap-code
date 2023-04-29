import React from 'react'
import './Card.css'

export default function Card({ date, title, imageUrl, onButtonClick, size }) {
  return (
    <div className={size ? 'card large large-btn' : 'card'}>
      <img src={imageUrl}alt='imgs'/>
      <div className='card-content'>
        <div>
          <p className='card-content_date'>{date}</p>
          <p className='card-content_title'>{title}</p>
            <button onClick={onButtonClick}>Read Full  Article</button> 
        </div>
      </div>
    </div>
  )
}
