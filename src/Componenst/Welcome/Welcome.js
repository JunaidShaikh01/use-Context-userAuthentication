import React, { useContext } from "react";
// import LoginContext from "../Context/LoginContext";
import LoginContext from "../../Context/LoginContext";
import "./Welcome.css";
export default function Welcome() {
  const { state, dispatch } = useContext(LoginContext);
  function handleLogout() {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className="welcomeSection">
      <h2>Welcome , {state.user}</h2>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}
