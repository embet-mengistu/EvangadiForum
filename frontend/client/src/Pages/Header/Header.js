import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-xl">
            <img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png" />
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>

            <div className="navbar-collapse collapse navbars">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger " href="#">
                    How it Works
                  </a>
                </li>
                <button className="nav-item nav_button">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Sign In
                  </a>
                </button>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
