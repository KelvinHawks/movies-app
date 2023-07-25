import React, {useState, useContext, useEffect} from 'react'
import{useNavigate} from 'react-router-dom'
import AuthContext from '../../Context'
import './register.css'

function Register() {
  const navigate = useNavigate()
  const{register,userInfo} = useContext(AuthContext)
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
    <div className='container'>
      <form method='POST' onSubmit={handleSubmit}>
        <h1>Register</h1>
        {/* {error&&(<div><p>{error}</p></div>)} */}
        <input type="text" name='username' onChange={handleChange} placeholder='username'/>
        <input type="email" name='email' onChange={handleChange} placeholder='email'/>
        <input type="password" name='password' onChange={handleChange} placeholder='password'/>
        <button type='submit'><a href="/login">Register</a></button>
      </form>
    </div>
  )
}

export default Register