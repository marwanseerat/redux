
import React from 'react'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import {logout,selectUser } from "../features/userSlice"
import "./Logout.css"

const Logout = () => {
 
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const handellogout =(e) =>{
    e.preventDefault();

    
    dispatch(logout());
  }

  return (
    <div>
        <h1 class=" m-3">Welcom <span>{user.name}</span></h1>
        <button class="btn btn-secondary m-3" onClick={(e) => handellogout(e)}>Logout</button>

        </div>   
              
     
  ); 
           
           
           
        
}

export default Logout