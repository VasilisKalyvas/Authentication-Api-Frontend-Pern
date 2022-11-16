import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess} from "../redux/userSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
          const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
          dispatch(loginSuccess(res.data));
          navigate('/');
        } catch (err) {
          dispatch(loginFailure());
        }
      };
  return (
    <div>
        <div>
            Login
        </div>
        <form>
            <label>Email:</label><br/>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/><br/>
            <label>Password</label><br/>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </form> 
    </div>
  )
}

export default Login