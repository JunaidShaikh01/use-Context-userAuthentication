import { useContext } from "react";
import "./App.css";
import LoginContext from "./Context/LoginContext";
// import LoginState from "./Context/LoginState";
import Welcome from "./Componenst/Welcome/Welcome";
import Login from "./Componenst/Login/Login";
import Header from "./Componenst/Header/Header";

function App() {
  const { state } = useContext(LoginContext);
  console.log("state ", state);
  console.log("Authentication Status:", state.isAuthentication);
  return (
    <div className="App">
      {/* <LoginState> */}
      <Header />
      {state.isAuthentication ? <Welcome /> : <Login />}
      {/* </LoginState> */}
    </div>
  );
}

export default App;
