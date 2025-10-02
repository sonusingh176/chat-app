import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getLoggedUser } from '../apiCalls/users';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';

const ProtectedRoutes = ({children}) => {
    const dispatch=useDispatch();
    //  const {user}= useSelector((state)=>state.userReducer);

    const navigate = useNavigate();

    const getloggedInUser = async()=>{
        
        let response=null;
        try {
            response=await getLoggedUser();
            if(response.success){
                console.log(response.data)
            
                dispatch(setUser(response.data));
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
    },[])


    return (
         <>
       
    <div>{children}</div>
    </>
  )
}

export default ProtectedRoutes