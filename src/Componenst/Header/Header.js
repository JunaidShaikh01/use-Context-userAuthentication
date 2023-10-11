import React, { useContext } from "react";
import "./Header.css";
import LoginContext from "../../Context/LoginContext";
export default function Header() {
  const { state, dispatch } = useContext(LoginContext);
  function LogoutHandler() {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className="headerSection">
      <div className="loginNameSection">
        <h3>LoginPage</h3>
      </div>
      <div className="LoginButtonSection">
        {state.isAuthentication ? (
          <button onClick={LogoutHandler}>LOGOUT</button>
        ) : (
          <button>Login</button>
        )}
      </div>
    </div>
  );
}
