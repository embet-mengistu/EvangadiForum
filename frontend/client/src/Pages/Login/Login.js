import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SignUp from "../SignUp/SignUp";
import About from "../SignUp/About";
import "./login.css";

function Login() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      navigate("/");
    } catch (err) {
      console.log("problems", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <div className="container">
      <div>
        {/* <h1>Login</h1>
      <form onSubmit={handleSumbit}>
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <button>submit</button>
      </form> */}

        {/* <Link to="/signup">Create a new account</Link> */}

        <div className="sign_flex">
          <div className="signin_box ">
            <h6 className="signin_description">Login to your account</h6>
            <div className="signin_description2">
              Don't have an account ?{" "}
              <Link to="/signup" style={{ color: "#FE8303" }}>
                Create a new account
              </Link>
            </div>
            <br />
            <form onSubmit={handleSumbit}>
              <div className="email_input">
                <Col sm="12" md="12" lg="24" xl="12">
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                  />
                </Col>
              </div>
              <br />

              <div>
                <Col sm="12" md="12" lg="12" xl="12">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Col>
              </div>
              <br />
              <button className="agree_join_button  ">submit</button>
            </form>

            <div style={{ paddingBottom: "30px" }}>
              <Link to="/signup" style={{ color: "#FE8303" }}>
                Create an account
              </Link>
            </div>
          </div>
          {/* /////// */}
          <div className="about_platfrom">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
