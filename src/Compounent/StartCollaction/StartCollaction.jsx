import React from "react";
import nft1 from "../assets/sample_02 2.jpg";
import nft3 from "../assets/nft3.png";

function StartCollaction() {
  return (
    <div
      className=""
      style={{
        borderBottom: "2px solid #4b2e0d",
        width: "92.5%",
        margin: "auto",
      }}
    >
      <div className="container">
        <div className=" d-flex align-items-center justify-content-center px-0 px-md-3 py-5">
          <div className="container-lg d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 gap-md-5">
            {/* Image Stack */}
            <div
              className="position-relative mx-auto"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "354px",
              }}
            >
              {/* Card 1 */}
              <img
                alt="Trapgevel card 1 showing front view of brick building"
                className="position-absolute top-0 start-0 shadow"
                src={nft1}
                style={{
                  width: "50%",
                  height: "auto",
                  maxHeight: "300px",
                  transform: "rotate(-8deg)",
                }}
              />

              {/* Card 2 */}
              <img
                alt="Trapgevel card 2 showing front view with ornate golden frame"
                className="position-absolute top-0 shadow"
                src={nft3}
                style={{
                  left: "49%",
                  width: "50%",
                  height: "auto",
                  maxHeight: "300px",
                  transform: "rotate(8deg)",
                }}
              />
            </div>

            {/* Text Content */}
            <div className="text-black" style={{ maxWidth: "550px" }}>
              <h2 className="text-dark headtitle">
                WHAT ARE GOLDEN FACADE?
              </h2>
              <p
                className="text-dark  mb-4 textcontent"
              
              >
                LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER
                SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE
                AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED
                NOT ONLY FIVE
              </p>
              <button
                className="vintage-button"
             
              >
                START COLLECTING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartCollaction;
