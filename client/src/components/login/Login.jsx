import React, {useState} from 'react'
import './login.css'

function Login() {
  const[inputValue, setInputValue] = useState({
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
    setInputValue({email:'',password:''})
  }
  return (
    <div className='container'>
      <form method='POST' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email" name='email' onChange={handleChange} placeholder='email'/>
        <input type="password" name='password' onChange={handleChange} placeholder='password'/>
        <button type='submit'><a href="/homepage">Login</a></button>
        <p className='signup'>Sign up instead? <a href="/">sign up</a></p>
      </form>
      
    </div>
  )
}

export default Login