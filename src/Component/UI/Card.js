import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='class input' > {props.children}</div>
  )
}

export default Card
