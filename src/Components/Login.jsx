import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setUsername}) => {
  const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


async function HandleLogin(e) {

try {

    const res = await axios.post("https://todobackend-ps81.onrender.com/api/auth/login", {
        email : Email,
        password : Password,
        
    }, {
        withCredentials: true,
    })
setUsername("")
      console.log("Success:", res.data);
          
navigate("/dashboard");
window.location.reload();


      

}catch(err) {

      console.log("Error:",err.message);

}
}


  return (
     <div className='h-screen w-full bg-linear-to-br from-emerald-50 to-teal-50 flex  flex-col justify-center items-center ' >
        
        <div className='bg-gray-50 rounded-2xl h-[80%] w-[90%] md:w-100 border-2 flex flex-col justify-around items-center' >
<h1 className='text-2xl font-extrabold' >Login</h1>
<input value={Email} onChange={ (e) => {setEmail(e.target.value)}} type="text" className='w-[80%] h-10 rounded-2xl border-2' placeholder='Email' />
<input  value={Password} onChange={ (e) => {setPassword(e.target.value)}} type="password" className='w-[80%] h-10 rounded-2xl border-2' placeholder='Password' />

<button onClick={HandleLogin} className='bg-green-500 py-2 px-4 rounded-2xl text-white font-bold hover:scale-105 active:scale-95 transition cursor-pointer' >Login</button>



        </div>

    </div>
  )
}

export default Login