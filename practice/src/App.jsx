import { useState } from 'react'
import Todo from './Todo'
import Header from './Components/Header'
import People from './Components/People'
import Planet from './Components/planet'
import {ReactQueryDevtools} from 'react-query-devtools'

function App() {

  const [page, setpage]= useState("planet")


  return (
    <>
    <div className='bg-gray-800 h-[100vh]'>
    <div  className=' flex justify-center text-2xl p-3 rounded-md text-yellow-600'>Name Lists</div>
    <Header setpage={setpage} />
    {page === "planet" ? <Planet/> : <People/>}
    </div>
    <ReactQueryDevtools initialIsOpen={false}/>
    </>
  )
}

export default App
