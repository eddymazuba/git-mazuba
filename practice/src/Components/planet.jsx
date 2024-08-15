import React from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Plan from './Plan'

const Planet = () => {

  const AxiosFetch=async()=>{
    const results= await axios.get('http://swapi.dev/api/planets/');
    console.log(results.data)
    return results.data 

  }
  const { data:planets ,status}=useQuery({
    queryKey: ['query'],
    queryFn: AxiosFetch,
  });
  return (
    <div>
      <h2 className='text-yellow-500 flex justify-center font-bold text-2xl'>Planet</h2>
      <ul>
        {planets?.results?.map((planet , index)=>(
          <div className='bg-gray-900 gap-5'><Plan  key={index} planet={planet}/></div>
        ))}
      </ul>
    </div>
  )
}

export default Planet