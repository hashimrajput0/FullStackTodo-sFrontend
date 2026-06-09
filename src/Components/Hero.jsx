import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({isLoggedIn}) => {
  return (
    <div className='h-screen w-full bg-linear-to-br from-emerald-50 to-teal-50 flex  flex-col ' > 
    <h1 className='text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight ml-10 mt-20'>A Simple <span className='block text-emerald-600' >Todo's</span></h1>
    <h2 className='font-extrabold text-2xl text-gray-900 mt-5 md:ml-20 ml-5' >Engineered by <u> <a href="https://www.linkedin.com/in/muhammadhashim0/"> Muhammad Hashim </a> </u></h2>
    
    {isLoggedIn && (
      <div className='flex ml-20 mt-5'>
  <Link className=' text-white py-2 px-4 bg-red-500 rounded font-bold hover:scale-105 active:scale-95 transition' to="/dashboard">To Dashboard</Link>

      </div>

)}
     </div>
  )
}

export default Hero