import React, {useState} from 'react'

function Login() {
  const[inputValue, setInputValue] = useState({
    email:'',
    password: ''
  })
  const handleChange = (e)=>{
    const{name,value} = e.target
    setInputValue({[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(JSON.stringify(inputValue, 2, undefined));
  }
  return (
    <div>
      <form method='POST' onSubmit={handleSubmit}>
        <input type="email" name='email' onChange={handleChange} placeholder='email'/>
        <input type="password" name='password' onChange={handleChange} placeholder='password'/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login