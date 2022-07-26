import React, {useState} from 'react'
import './login.css'
import {useSelector,useDispatch } from 'react-redux';
import {login} from "./actions/index";



function Login() {
    const dispatch=useDispatch();
    const admin=useSelector(state=>state.login.admin);
    const error=useSelector(state=>state.login.error);

        if(admin !== ''){
            window.location.href = "/Dashboard";
        }
    
      
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

  return (
    <form action="#!" id="main">
    <h2>Login to your account</h2>
    
    <div className="input-parent">
      <label htmlFor="username">Username or Email</label>
      <input type="text" id="username" onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="input-parent">
      <label htmlFor="password">Password</label>
      <input type="password" id="password"  onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div id='Error-div' style={{color:'red'}}>
            <span>{error}</span>
        </div>
        <br/>
    <button type="submit"  onClick={() =>  dispatch(login(email,password))}>Login</button>
  </form>
  
  )
}

export default Login