import React from "react";
import logo from "../assets/logo_01.png";
import logo1 from "../assets/icon_about 1.png";
import logo2 from "../assets/icon_newsletter 2.png";
import logo3 from "../assets/icon_newsletter 3.png";
import face from "../assets/fb.svg";
import  ledink  from "../assets/in.svg";
import  inst  from "../assets/insta.svg";
import  x  from "../assets/x.svg";

function Footer() {
  return (
    <div className="px-4 mt-5 padd ">
      <div
        className="container  p borderfoter "
        style={{ backgroundColor: "#E8C489", padding: "54px  50px 50px 50px" }}
      >
        <img src={logo} alt="Facade logo mb-3" className="footimg rounded" />
        <footer
          className="  mt-4  d-flex flex-column flex-md-row justify-content-between align-items-start "
          style={{ padding: " 50px 0px 0px 0xp" }}
        >
          {/* Left section */}

          <div className="d-block d-md-flex gap5  mt-3">
            <img src={logo1} alt="Facade logo" className=" gada " />
            <img src={logo2} alt="Facade logo" className=" gada " />
            <img src={logo3} alt="Facade logo" className=" gada " />
          </div>

          {/* Right section */}
          <div
            className="d-flex flex-column gap-1"
            style={{ maxWidth: "350px" }}
          >
            <p className="text-uppercase text-dark  font-eb"   style={{ fontSize: "18px" }}>
              Subscribe to our media
            </p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control rounded-start text-muted  font-eb p-2"
                style={{ backgroundColor: "rgb(255 255 255 / 20%)", border: "none" }}
              />
              <button
                type="submit"
                style={{ fontSize: "16px", backgroundColor: "#32200D" }}
                className="btn text-white rounded-end  font-eb"
              >
                SUBSCRIBE
              </button>
            </form>
            <div className="d-flex gap-2 mt-2">
              <a href="#"  aria-label="Facebook">
                <img className="wtt" src={face} alt="" />
              </a>
              <a
                href="#"
                
                aria-label="Instagram"
              >
                <img className="wtt" src={inst} alt="" />
              </a>
              <a href="#"  aria-label="LinkedIn">
                 <img className="wtt" src={ledink} alt="" />
              </a>
              <a href="#"  aria-label="Email">
                  <img className="wtt" src={x} alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
