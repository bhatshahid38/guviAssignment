import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Switch from "./components/Switch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Profile from "./components/Profile";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  if (isLoggedIn) {
    return (
      <div>
        <Profile userInfo={userInfo} />
      </div>
    );
  }
  return (
    <>
      <Switch />
      <div className="mainContainer">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <Login
                  setIsLoggedIn={(data) => {
                    setIsLoggedIn(true);
                    setUserInfo(data);
                  }}
                />
              }
            ></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
