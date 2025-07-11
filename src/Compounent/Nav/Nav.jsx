import React from "react";
import logo from "../assets/logo_01.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
        <div className=" "style={{borderBottom:"2px solid #4b2e0d",width:"95.5%",margin:"auto"}}>

      <nav className="navbar navbar-expand-lg text-white pading container pb-4" >
        <div className="container justify-content-around " style={{gap:"6rem"}}>
          {/* Left: Logo */}
          <a className="navbar-brand text-white" href="#">
            <img src={logo} alt="" className="rounded" />
          </a>

          {/* Toggle Button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center: Links */}
          <div
            className="collapse navbar-collapse justify-content-evenly  baner"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-1 gap-md-3">
              <li className="nav-item">
               <Link className="nav-link letter" to="/">
                  HOME
                 </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link letter" to="/COLLECTION">
                  COLLECTION
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link letter" >
                  ABOUT US
                </Link>
              </li>
            </ul>
            <button className="vintage-button d-block d-lg-none" type="submit">
              CONNECT WALLET
            </button>
          </div>

          {/* Right: Search */}
          <button className="vintage-button d-none d-lg-block" type="submit">
            CONNECT WALLET
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
