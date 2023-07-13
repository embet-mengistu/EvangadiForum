import "../src/Resources/bootstrap.css";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import SharedLayout from "./SharedLayout";
import Footer from "./Footer/Footer";

function App() {
  const [userData, setUserData] = useContext(UserContext);

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    } else {
      const userRes = await axios.get("http://localhost:3000/api/users", {
        headers: { "x-auth-token": token },
      });

      setUserData({
        token,
        user: {
          id: userRes.data.data.user_id,
          display_name: userRes.data.data.user_name,
        },
      });
    }
  };

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home logout={logout} />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
