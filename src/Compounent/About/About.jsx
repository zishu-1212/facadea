import React from "react";
import nft1 from "../assets/sample_02 2.jpg";
import nft3 from "../assets/nft3.png";
function About() {
  return (
    <div className="container  mt-5"  style={{ paddingTop: "8%" }}>
      <div className="row ">
        <div className="col-md-6 mb-5">
          <h2 className="headtitle mb-2">ABOUT FACADEA</h2>
          <p className=" fw-bold mb-1" style={{
              fontSize: "17px",
              lineHeight: "22px",
              fontWeight: "500",
            }}>
            A LIVING DUTCH TRADITION, BUILT ONE FACADE AT A TIME.
          </p>
          <p
            className=" textcontent mt-3"
           
          >
            FACADEA IS A UNIQUE NFT CARD COLLECTION THAT CAPTURES THE ESSENCE OF
            HISTORICAL DUTCH ARCHITECTURE. EACH CARD FEATURES A ONE-OF-A-KIND
            DIGITAL RECONSTRUCTION OF A 17TH-CENTURY FAÇADE, METICULOUSLY
            MODELED AND PRESERVED ON THE BLOCKCHAIN.
          </p>
          <div className="d-block d-md-flex gap-2 p-2">
            <button
              className="vintage-button "
              
            >
              VIEW COLLECTION
            </button>
            <button
              className="vintage-button2 mt-3 mt-md-0 "
              
            >
              EXPLORE ROADMAP
            </button>
          </div>
        </div>
        <div
          className="position-relative col-md-6 mx-auto"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "433px",
            left:"9%"
          }}
        >
          {/* Card 1 */}
          <img
            alt="Trapgevel card 1 showing front view of brick building"
            className="position-absolute top-0 start-0 shadow"
            src={nft1}
            style={{
              width: "40%",
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
              left: "39%",
              width: "40%",
              height: "auto",
              maxHeight: "300px",
              transform: "rotate(8deg)",
            }}
          />
        </div>
      </div>

      <div className="mt-4 p-3 p-md-1">
        <h3 className="headtitlemb-3">KEY FACTS</h3>
        <div
          className="row "
          style={{ fontSize: "17px", lineHeight: "20px" }}
        >
          <div className="col-md-6">
            <div className="mb-3">
              <p className="fw-bold">1650 UNIQUE CARDS</p>
              <p className="textcontent">
                THE COLLECTION CONSISTS OF 1,650 DIGITAL CARDS. EACH CARD IS
                ENTIRELY UNIQUE, ONLY ONE COPY EXISTS. EVER.
              </p>
            </div>
            </div>
          <div className="col-md-6">

            <div className="mb-3">
              <p className="fw-bold">CRAFTED IN 3D, NOT GENERATED</p>
              <p className="textcontent">
                ALL FACADES ARE HANDCRAFTED IN DETAILED 3D MODELS. NO AI, NO
                PROCEDURAL GENERATION, JUST PRECISE DIGITAL CRAFTSMANSHIP BASED
                ON HISTORICAL SOURCES.
              </p>
            </div>
            </div>
             <div className="col-md-6">
            <div className="mb-3">
              <p className="fw-bold">DIGITAL AND VERIFIABLE</p>
              <p className="textcontent">
                THIS IS A FULLY DIGITAL NFT SERIES, NO PHYSICAL COPIES.
                OWNERSHIP IS RECORDED AND VERIFIABLE ON THE BLOCKCHAIN.
              </p>
            </div></div>
          
          <div className="col-md-6">
            <div className="mb-3">
              <p className="fw-bold">REAL ARCHITECTURE, DIGITALLY PRESERVED</p>
              <p className="textcontent">
                EVERY CARD REPRESENTS A SPECIFIC DUTCH BUILDING, EITHER STILL
                STANDING OR LOST TO TIME, SELECTED FOR ITS ARCHITECTURAL
                SIGNIFICANCE AND CHARACTER.
              </p>
            </div>
            </div>
 <div className="col-md-6">
            <div className="mb-3">
              <p className="fw-bold">10-YEAR RELEASE TIMELINE</p>
              <p className="textcontent">
                CARDS WILL BE RELEASED GRADUALLY OVER A PERIOD OF 10 YEARS, WITH
                EACH PHASE FOCUSING ON A DIFFERENT DUTCH CITY AND ITS
                DISTINCTIVE ARCHITECTURAL STYLE.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="paper3">
          <h1
            className="  text-dark fs-2 fw-semibold mb-3 d-flex justify-content-center align-items-center"
            // style={{ paddingTop: "9%" }}
          >
            Why Facadea?
          </h1>
          <div className="row widtha pb-5 fs-5">
            <p className="text-center textcontent">
              Facadea continues a rich Dutch tradition: a deep appreciation for
              architecture and its expressive, symbolic forms. Gables are not
              just rooftops, they are identities in brick, stories in stone, and
              time capsules of craftsmanship.
            </p>
            <p className="text-center textcontent">
              Collecting Facadea means participating in this living tradition,
              not just admiring history, but preserving and extending it into
              the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
