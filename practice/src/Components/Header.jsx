import React from 'react'

const Header = ({setpage}) => {
  return (
   <div className=' flex justify-center text-2xl gap-3'>
    <button className='bg-gray-600 p-4 rounded-lg font-semibold ' onClick={()=> setpage('planet')}>planet</button>
    <button className='bg-gray-600 p-4 rounded-lg font-semibold ' onClick={()=> setpage("people")}>people</button>
   </div>
  )
}

export default Header