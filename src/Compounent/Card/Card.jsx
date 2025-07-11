import React from "react";
import nft1 from "../assets/nft1.png";
import { Link } from "react-router-dom";

function Card({ title, price, image }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <img
          src={image}
          className="w-100 "
          style={{ height: "100%"}}
          alt={title}
        />
        <div className="d-flex justify-content-between mb-2">
          <p className="fw-bold mb-0" style={{fontSize:"14px"}}>{title}</p>
          <p className="fw-bold mb-0" style={{fontSize:"14px"}}>${price}</p>
        </div>
        <Link to="/ColloctionDetail"
          className="btn text-light mt-auto mb-2"
          style={{
            backgroundColor: "#32200D",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          COLLECT
        </Link>
      </div>
    </div>
  );
}

export default Card;
