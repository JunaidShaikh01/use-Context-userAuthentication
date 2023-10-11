import React, { useReducer } from "react";
import LoginContext from "./LoginContext";

function authReducer(state, action) {
  // console.log("Reducer Action:", action);

  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuthentication: true,
      user: action.payload,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuthentication: false,
      user: "",
    };
  } else {
    return initialState;
  }
}
const initialState = {
  isAuthentication: false,
  user: "",
};

export default function LoginState({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}
