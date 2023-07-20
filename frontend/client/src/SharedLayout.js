import React, { useContext } from "react";
import Header from "./Pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { UserContext } from "./context/UserContext";

function SharedLayout() {
  const [userData, setUserData] = useContext(UserContext);
  // ////////make the setuserdata token empty(if its empty they will no longer have acces to the home page which will be automatically signed out that means)
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  return (
    <>
      <Header logout={logout} />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
