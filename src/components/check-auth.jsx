import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckAuth = ({children, protectedRoute}) => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(protectedRoute){
            if(!token){
                navigate("/login")
            }
            else{
                setloading(false)
            }
        }
        else{
            if(token){
                navigate("/")
            }
            else{
                setloading(false)
            }
        }
    },[navigate,protectedRoute])
  

    if(loading){
        return <div>loading...</div>
    }
    return children
}

export default CheckAuth
