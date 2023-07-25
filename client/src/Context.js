import {createContext, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

function AuthProvider({children}){
    const[userInfo, setUserInfo] = useState([])
    const register = async(user)=>{
        const data = await axios.post('http://localhost:5000/api/users/register',user)
        setUserInfo(data)
}
return(
    <AuthContext.Provider value={{register, userInfo}}>
        {children}
    </AuthContext.Provider>
)

}

export default {AuthContext, AuthProvider}


