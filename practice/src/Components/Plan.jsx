import React from 'react'

const Plan = ({planet}) => {
  return (
    <div  className='grid grid-cols-4 justify-center font-bold '>
        <h3>{planet.name}</h3>
        <div className='font-thin'>{planet.population}</div>
        <div className='font-thin'>{planet.terrain}</div>
    </div>
  )
}

export default Plan