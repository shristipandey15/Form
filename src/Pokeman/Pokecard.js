import React from 'react'
import  './Pokecard.css'

function Pokecard({data}) {
  return (
    <div className="container">
         <div> <img src={data.image}/> </div>
         <div className="box">
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.type}</div>
        </div>
       
       
    </div>
  )
}

export default Pokecard
