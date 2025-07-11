import React from "react";
import nft1 from "../assets/sample_02 2.jpg";
import { Link } from "react-router-dom";
function ColloctionDetail() {
      const data = [
    { address: "oX5F11429D88A978A9A7AD793F73B8F24A0A6163E2", date: "22-05-2023" },
    { address: "oX5F11429D88A978A9A7AD793F73B8F24A0A6163E2", date: "22-05-2023" },
    { address: "oX5F11429D88A978A9A7AD793F73B8F24A0A6163E2", date: "22-05-2023" },
    { address: "oX5F11429D88A978A9A7AD793F73B8F24A0A6163E2", date: "22-05-2023" },
    { address: "oX5F11429D88A978A9A7AD793F73B8F24A0A6163E2", date: "22-05-2023" },
    { address: "oX5F11429D88A978A9A7AD793F73B8F24A0A6163E2", date: "22-05-2023" },
    { address: "oX5F11429D88A978A9A7AD793F73B8F24A0A6163E2", date: "22-05-2023" },
    { address: "oX5F11429D88A978A9A7AD793F73B8F24A0A6163E2", date: "22-05-2023" },
  ];
  return (
    <div>
      <div className="container " style={{ marginTop: "15%" }}>
        <div className="row ">
          <div className="col-12 d-flex  col-lg-5 mt-3">
            <img src={nft1} className="imggw" alt="" />
          </div>
          <div className="col-12 col-lg-7 mt-3">
            <div className="  flex items-center justify-center p-6">
              <div className="max-w-md w-full">
                <div className="flex justify-end mb-6">
                  <div className="text-end">
                    <h2
                      className="fs-3 fw-bold leading-none"
                      style={{  }}
                    >
                      GOLDEN FACADE
                    </h2>
                    <p
                      className="text-[10px] mt-1"
                      style={{  }}
                    >
                      CARD # 0013
                    </p>
                  </div>
                </div>

                <h1
                  className="fs-3 fw-bold mb-1"
                  style={{  }}
                >
                  VAN ENKHUIZEN
                </h1>

                <div className="mb-2 " style={{  }}>
                  <p className="textcontent fw-bold">1620</p>
                  <p className="textcontent fw-bold">STEPPED GABLE</p>
                  <p className="textcontent fw-bold">HISTORICAL</p>
                  <p className="textcontent fw-bold">RARE</p>
                </div>

                <p
                  className="fw-bold mb-3 textcontent"
                  style={{  }}
                >
                  LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER
                  SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE
                  AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED
                  NOT ONLY FIVE
                </p>

                <p
                  className="fs-2 fw-bold mb-2"
                  style={{  }}
                >
                  $99.9
                </p>

                <div className="d-flex gap-2">
                  <Link
                    to="/ColloctionDetail"
                    className="vintage-button"
                  
                  >
                    BUT NOW
                  </Link>
                  <button
                    className="vintage-button2"
                  
                  >
                    MAK AN OFFER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 pt-5 container">
            <h1
            className="headtitle  text-capitalize fw-bold"
        style={{ marginTop: "7%" }}
          >
            previous owners
          </h1>
        <div className="paper2"   >
      
       <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 textwrap">
          <ul
            className="list-unstyled m-0 p-0 fss widtt"
            style={{  color: "black" }}
          >
            {data.map((item, index) => (
              <li key={index} className="d-flex justify-content-between mb-3 small " style={{width:"100%"}}>
                <span className="textcontent ">{item.address}</span>
                <span className="textcontent">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default ColloctionDetail;
