import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Nevbar = ({isLoggedIn, Username}) => {



  return (
    <div className='bg-[#223127] w-full md:h-12 h-16 flex items-center justify-between' >
        <h1 className='text-white font-extrabold text-3xl ml-2' >Todo's</h1>
        <div>
                {isLoggedIn ? (
                  <div className='flex gap-4 mr-4 items-center'>
                    <h1 className=' text-white font-bold underline' >{Username}</h1>
        <Link className='text-black py-1 px-2 bg-white rounded font-bold hover:scale-105 active:scale-95 transition' to="/logout">Logout</Link>

                  </div>
      ) : (
        <div className='flex gap-2 mr-5' >
        <Link className='text-black py-1 px-2 bg-white rounded font-bold hover:scale-105 active:scale-95 transition' to="/login">Login</Link>
        <Link  className='text-black py-1 px-2 bg-white rounded font-bold hover:scale-105 active:scale-95 transition' to="/register">Register</Link>
        </div>
      )}
        </div>
    </div>
  )
}

export default Nevbar