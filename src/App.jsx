import React, { useEffect, useState } from 'react'
import Nevbar from './Components/Nevbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Logout from './Components/Logout';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';


const App = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [Username, setUsername] = useState("")



useEffect(() => {
  const CheckAuth = async () => { 
try {



  const res = await axios.get("https://todobackend-ps81.onrender.com/api/auth/isloggedin", {
    withCredentials: true,
  })
  
    setisLoggedIn(res.data.isLoggedIn);
    setUsername(res.data.user.username)

  } catch(err) {
    setisLoggedIn(false);
  } 


  }
  
  
CheckAuth()

},[Username] )



  return (
    <div>
      <Nevbar isLoggedIn={isLoggedIn} Username={Username}  />

    <Routes>
      <Route path="/" element={<Hero isLoggedIn={isLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout setUsername = {setUsername} />} />
      <Route path="/login" element={<Login setUsername = {setUsername} />} />
      <Route path="/dashboard" element={<Dashboard Username={Username} />} />




    </Routes>

      
      <Footer />
    </div>
  )
}

export default App