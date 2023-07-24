import React, {useContext, useEffect, useState} from 'react'
import{useNavigate} from 'react-router-dom'
import AuthContext from '../../Context'

function Register() {
  const navigate = useNavigate()
  const{register,userInfo,error} = useContext(AuthContext)
  const[inputValue, setInputValue] = useState({
    username:'',
    email:'',
    password: ''
  })
  const handleChange = (e)=>{
    const{name,value} = e.target
    setInputValue({...inputValue, [name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(JSON.stringify(inputValue, 2, undefined));
    setInputValue({username:'',email:'',password:''})
    register(inputValue)
  }
  useEffect(()=>{
    if(userInfo){
      navigate('./login')
    }
  },[userInfo,navigate])
  return (
    <div>
      <form method='POST' onSubmit={handleSubmit}>
        {error&&(<div><p>{error}</p></div>)}
        <input type="text" name='username' onChange={handleChange} placeholder='username'/>
        <input type="email" name='email' onChange={handleChange} placeholder='email'/>
        <input type="password" name='password' onChange={handleChange} placeholder='password'/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register