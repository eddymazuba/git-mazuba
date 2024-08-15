import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todolist , settodo]= useState([]);
    const [loading , setloading] = useState(false)

    useEffect(()=>{
        const fetchtodo =async()=>{
            try{
                setloading(true)
                const result= await axios.get('https://dummyjson.com/todos');
                settodo(result.data.todos);
                console.log(result.data.todos);
                setloading(false)
            }catch(error){
                console.log("error boss" ,error)
            }
        }
        fetchtodo()
    },[])
  return (
    <>
    <h1 className='flex justify-center text-2xl text-blue-800'>simple todo practice</h1>

    {loading ? '':<hi>loading</hi>}
    <ul>
    {todolist?.map((todo)=>{
        return(
        <li className='flex justify-center text-black ' key={todo.id}>{todo.todo}</li>
    )})}
    </ul>
    </>
  )
}

export default Todo