import { Children, createContext, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

const initialUserInfo = localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')):{}

function AuthProvider({children}){
    const[userInfo, setUserInfo] = useState(initialUserInfo)
    const[error, setError] = useState(null)
    const register = async(user)=>{
        try {
            const{data} = await axios.post('127.0.0.1/api/users/register', user)
            setUserInfo(data)
        } catch (error) {
            setError(error.response ? error.response.message : error.message)
        }
    }
    return(
        <AuthContext.Provider value = {{userInfo, error, register}}>
            {children}
        </AuthContext.Provider>
    )
}



export default {AuthProvider, AuthContext} 


