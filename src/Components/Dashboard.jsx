import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import NewTasksInput from './NewTasksInput'

const Dashboard = ({Username}) => {

const [Tasks, setTasks] = useState([])

const [Comment, setComment] = useState("")




const Comments = ["Welcome", "Hey there!", "Greetings","Great to see you!"]

  useEffect(() => {
    const idx = Math.floor(Math.random() * Comments.length)
    setComment(Comments[idx])
  }, [])


useEffect(  () => {

  async function GetTasks() {

  
    
  const res = await axios.get("https://todobackend-ps81.onrender.com/api/tasks/all", {
    withCredentials: true,
  })  
 console.log(res);
   setTasks(res.data.Tasks)

  }
  GetTasks()
  }, [])

async function HandleToggle(id, status) {

  const res = await axios.patch(`https://todobackend-ps81.onrender.com/api/tasks/update/${id}`,
          { completed: status },
          {withCredentials : true }

  )
  window.location.reload();


}

async function OnDelete(id){
    const res = await axios.delete(`https://todobackend-ps81.onrender.com/api/tasks/delete/${id}`,
      
          {withCredentials : true }

  )
  window.location.reload();

}


  return (
    <div className='h-screen w-full bg-linear-to-br from-emerald-50 to-teal-50 flex  flex-col  ' >
        <h1 className='ml-4 text-2xl font-bold underline-offset-2 underline mt-5 mb-2 ' >{Comment} {Username}</h1>
        <NewTasksInput />
  <div>
    {Tasks.map((Task, index) => (

<div key={index} className='w-full h-12 mt-1 border-2  bg-[#468189] flex justify-between items-center' >
      <h1  className='text-white font-extrabold ml-5' >{Task.title}</h1>

      <div className='mr-5 flex gap-5' >
      <input   checked={Task.completed} onChange={(e) => {HandleToggle(Task._id, !Task.completed)}} className='w-5' type="checkbox"  />
 <button onClick={(e) => {OnDelete(Task._id)}} className='bg-red-500 py-1 px-2 rounded text-white font-bold hover:scale-105 active:scale-95 transition cursor-pointer' >Delete</button>
 </div>
</div>

    ))}
  </div> 
    </div>
  )
}

export default Dashboard