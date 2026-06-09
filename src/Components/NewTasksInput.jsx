import axios from 'axios'
import React, { useState } from 'react'

const NewTasksInput = () => {

    const [TaskTitle, setTaskTitle] = useState("")


async function AddTask() {
    axios.post("https://todobackend-ps81.onrender.com/api/tasks/create", 
        { title : TaskTitle, completed : false },
        { withCredentials : true }
    )
      window.location.reload();

}




  return (
    <div className='w-full flex gap-5 ml-10 mt-5 mb-5'>
        <input value={TaskTitle} onChange={ (e) => {setTaskTitle(e.target.value)}} type="text" className='bg-white w-[60%] h-10 rounded border-2' placeholder='Your Tasks....' />
        <button onClick={AddTask} className='text-white py-2 px-4 bg-green-400 rounded font-bold hover:scale-105 active:scale-95 transition cursor-pointer border-0' >Add</button>
    </div>
  )
}

export default NewTasksInput
