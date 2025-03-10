import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(logout())}>Logout</button>;
};

export default LogoutButton;
