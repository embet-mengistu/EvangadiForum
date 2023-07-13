import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Home({ logout }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  useEffect(() => {
    if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);

  return (
    <div>
      <h1>welcome {userData.user?.display_name}</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Home;
