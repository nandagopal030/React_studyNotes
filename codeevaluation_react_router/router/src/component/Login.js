import React, { useState } from 'react'
import { replace, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPth = location.state?.path || '/'
    const handleLogin = () =>{
        auth.login(user);
        navigate(redirectPth, {replace: true});
    }
  return (
    <div>
        <label>
            UserName: {''}
            <input type='text' onChange={e => setUser(e.target.value)}></input>
        </label>
          <button onClick={handleLogin}>Login</button>
    </div>
  )
}
