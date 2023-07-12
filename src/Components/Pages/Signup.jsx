import React, { useState } from 'react'
import Forminput from '../Parts/Forminput'

const Signup = () => {

  const [values , setvalues] = useState({
    username:"" ,
    email:"" , 
    birthday:"" , 
    password:"" ,
    confirmpassword:""
  })

  const inputs = [
    {
      id:1 , 
      name:"username" , 
      type: "text" , 
      placeholder:"Username" , 
      label: "Username"
    } , 
    {
      id:2 , 
      name:"email" , 
      type: "text" , 
      placeholder:"Email" , 
      label: "Email"
    } , 
    {
      id:3 , 
      name:"birthday" , 
      type: "text" , 
      placeholder:"Birthday" , 
      label: "Birthday"
    } ,
    {
      id:4 , 
      name:"passwod" , 
      type: "text" , 
      placeholder:"Password" , 
      label: "Password"
    } , 
    {
      id:5 , 
      name:"confirmPassword" , 
      type: "text" , 
      placeholder:"Confirm Password" , 
      label: "Confirm Password"
    }
  ]

  const handlesubmit = (e) => {
    e.preventdefault();

  }

  console.log(Username)
  return (
    <div className="signup">
        <form action="" onSubmit={handlesubmit}>
          <Forminput placeholder="Username" setUsername={setUsername}/>
          <Forminput placeholder="Email"/>
          <Forminput placeholder="Fullname"/>
          <Forminput placeholder="stm"/>
          <button>Submit</button>
          </form>
    </div>
  )
}

export default Signup