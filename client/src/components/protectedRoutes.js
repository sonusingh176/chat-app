import React, { Children, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getLoggedUser } from '../apiCalls/users';

const ProtectedRoutes = ({children}) => {
    const [ user, setUser ] = useState(null);
    const navigate = useNavigate();

    const getloggedInUser = async()=>{
        let response=null;
        try {
            response=await getLoggedUser();
            if(response.success){
                console.log(response.data)
                setUser(response.data)
            }
            else{
                navigate('/login')
            }
        } catch (error) {
            navigate('/login')
        }
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            getloggedInUser();
        }else{
            navigate('/login')
        }
    })


    return (
        <>
        <p>Name:{user?.firstname + ' '+ user?.lastname}</p>
        
    <div>{children}</div>
    </>
  )
}

export default ProtectedRoutes