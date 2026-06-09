import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Logout = ({setUsername}) => {
      const navigate = useNavigate();


const handleLogout = async () => {

  try {
    await axios.post(
      "https://todobackend-ps81.onrender.com/api/auth/logout",
      {},
      { withCredentials: true }
    );
    navigate("/");
    window.location.reload();

  } catch (err) {
    console.log(err);
  }
};


  return (
    <div className='h-screen w-full bg-linear-to-br from-emerald-50 to-teal-50 flex  flex-col justify-center items-center ' >
        
<div className='bg-gray-50 rounded-2xl h-[50%] w-[90%] md:w-100 border-2 flex flex-col justify-around items-center' >
    <h1>Are You Sure!!</h1>
    <button onClick={handleLogout} className='bg-red-500 py-2 px-4 rounded-2xl text-white font-bold hover:scale-105 active:scale-95 transition cursor-pointer' >Logout</button>

</div>

    </div>
  )
}

export default Logout