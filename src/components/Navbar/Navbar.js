import React, { useState } from "react";
import hamburger_open from "../../assets/hamburger.svg";
import hamburger_close from "../../assets/icon-close.svg";
import search_icon from "../../assets/search_img.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <>
      <nav className={hamburgerOpen ? "menu-bar navbar" : "navbar"}>
        <div className="logo-wrapper">
          <h1>M</h1>
        </div>

        <div
          className={hamburgerOpen ? "nav-links nav-links-close" : "nav-links"}
        >
          <ul>
            <li>Sample</li>
            <li>Features</li>
            <li>Layouts</li>
            <li>Our shop</li>
            <li>Buy theme</li>
            <li>
              <img
                className="search_icon"
                src={search_icon}
                alt="search-icon"
              />
            </li>
          </ul>
        </div>
        <div className="hamburger-icon-wrapper">
          <img
            className={
              hamburgerOpen ? "hamburger-open-close" : "hamburger-close-open"
            }
            onClick={() => {
              setHamburgerOpen(!hamburgerOpen);
            }}
            src={hamburger_open}
            alt="hamburger icon"
          />
          <img
            className={
              hamburgerOpen ? "hamburger-close-open" : "hamburger-open-close"
            }
            onClick={() => {
              setHamburgerOpen(!hamburgerOpen);
            }}
            src={hamburger_close}
            alt="hamburger close icon"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
