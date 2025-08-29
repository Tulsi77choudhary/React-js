import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import "./index.css";
function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
