import React from 'react'
import { useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";
const Home = () => {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch()
  return (
    <div>
        <h4>Welcome {currentUser.user.name}!</h4>
        <button onClick={() =>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Home