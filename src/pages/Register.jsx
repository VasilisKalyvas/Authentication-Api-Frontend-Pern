import React from 'react'

const Register = () => {
  return (
    <div>
        <div>
            Register
        </div>
        <form>
            <label>Username:</label><br/>
            <input type="text" name="username" placeholder='Username...'/><br/>
            <label>Email:</label><br/>
            <input type="email" name="email" placeholder='Email...'/><br/>
            <label>Password</label><br/>
            <input type="password" id="password" name="password" placeholder='Password...'/>
            <button>Register</button>
        </form> 
    </div>
  )
}

export default Register