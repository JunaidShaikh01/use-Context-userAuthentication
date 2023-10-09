import React, { useContext } from "react";
import LoginContext from "../Context/LoginContext";
export default function Welcome() {
  const { state, dispatch } = useContext(LoginContext);
  function handleLogout() {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div>
      <h2>Welcome , {state.user}</h2>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}
