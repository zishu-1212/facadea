import React from "react";
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

function Mint() {
  return (
    <div
      className="my-5 py-5 d-flex align-items-center justify-content-center "
      style={{
        borderBottom: "2px solid #4b2e0d",
        width: "92.5%",
        margin: "auto",
      }}
    >
      <div className="container d-flex flex-column flex-md-row ">
        {/* Left Section */}
        <div className="col-md-6 p-0 p-md-4 p-md-2 d-flex flex-column justify-content-center">
          <h1 className="text-dark fw-lightbold mb-3 headtitle" >
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
            INDUSTRY.
          </h1>
          <p className="text-dark  mb-4 textcontent" >
            LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE
            THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND
            SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY
            FIVE
          </p>
          <div className="d-block d-md-flex gap-2  ">
            <button className="vintage-button">
            <Link
              to="/COLLECTION"
              className=" text-center text-white text-decoration-none "
            
            >
              VIEW COLLECTION
            </Link></button>
           
              <Modal />
            
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6  p-md-2 d-flex justify-content-center align-items-center gap-4">
          {/* Left Small Card */}
          <div style={{ width: "130px" }} className="d-none d-md-block">
            <img src={nft1} alt="Vintage house small" className="img-fluid w-100" />
          </div>

          {/* Center Large Card with SVG border */}
          <div className="position-relative" style={{ width: "290px" }}>
            <img
              src={nft2}
              alt="Large vintage house"
              className="img-fluid position-relative w-100"
            />
          </div>

          {/* Right Small Card */}
          <div style={{ width: "130px" }} className="d-none d-md-block">
            <img src={nft3} alt="Vintage house small" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
