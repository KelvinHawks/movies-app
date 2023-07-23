import React, {useState} from 'react'

function Register() {
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
  }
  return (
    <div>
      <form method='POST' onSubmit={handleSubmit}>
        <input type="text" name='username' onChange={handleChange} placeholder='username'/>
        <input type="email" name='email' onChange={handleChange} placeholder='email'/>
        <input type="password" name='password' onChange={handleChange} placeholder='password'/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register