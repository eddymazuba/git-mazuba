import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const People = () => {
  const Fetchpeople=async()=>{
    const results = await axios.get('http://swapi.dev/api/people/')
    console.log(results.data)
    return results.data

  }

  const {data , status} = useQuery({
    queryKey:['query'],
     queryFn: Fetchpeople})
  return (
    <div>
      <h2 className='text-yellow-500 flex justify-center font-bold text-2xl'>Peaple</h2>

      <ul>
        {data?.results?.map((person , index)=>(
          <li  className='flex justify-center font-bold' key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default People