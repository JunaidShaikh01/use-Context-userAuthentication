import React, { useContext, useState } from "react";
import LoginContext from "../../Context/LoginContext";
import "./Login.css";
export default function Login() {
  const { dispatch } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function onChnageHandler(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function loginHandler() {
    // console.log("Button is Clicked");
    // console.log("formData.Username", formData.username);
    // console.log("formData.Password", formData.password);
    if (formData.username === "Junaid" && formData.password === "Pass@123") {
      dispatch({ type: "LOGIN", payload: formData.username });
      // console.log("Write Username and PAssword");
    } else {
      alert("Incorrect username or password");
    }
  }
  return (
    <div className="loginSection">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter user name"
        name="username"
        value={formData.username}
        onChange={onChnageHandler}
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={formData.password}
        onChange={onChnageHandler}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}
