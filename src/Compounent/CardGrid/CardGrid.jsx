import React, { useState } from "react";
import nft1 from "../assets/sample_02 2.jpg"; // Use same or multiple images
import Card from "../Card/Card";

const cardData = Array.from({ length: 12 }).map((_, index) => ({
  id: index,
  title: `van enkhuizen`,
  price: (Math.random() * 100 + 10).toFixed(2),
  image: nft1,
}));

function CardGrid() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  return (
    <div className="container py-4">
      <div className="d-flex flex-column  gap-2 py-3">
        <div className="d-flex gap-2 flex-wrap justify-content-start ">
          <button
            className={`btn px-3 py-1  rounded ${
              activeFilter === "ALL"
                ? "bg-darki text-light"
                : "bg-transparent text-dark"
            }`}
            style={{
              border: "1px solid #32200D",
              fontSize: "12px",
              fontWeight: 500,
            }}
            onClick={() => setActiveFilter("ALL")}
          >
            ALL
          </button>

          <button
            className={`btn px-3 py-1  rounded ${
              activeFilter === "RARE"
                ? "bg-darki text-light"
                : "bg-transparent text-dark"
            }`}
            style={{
              border: "1px solid #32200D",
              fontSize: "0.7rem",
              fontWeight: 500,
            }}
            onClick={() => setActiveFilter("RARE")}
          >
            RARE
          </button>

          <button
            className={`btn px-3 py-1  rounded ${
              activeFilter === "OWNED"
                ? "bg-darki text-light"
                : "bg-transparent text-dark"
            }`}
            style={{
              border: "1px solid #32200D",
              fontSize: "0.7rem",
              fontWeight: 500,
            }}
            onClick={() => setActiveFilter("OWNED")}
          >
            OWNED
          </button>

          <button
            className={`btn px-3 py-1  rounded ${
              activeFilter === "SOLD"
                ? "bg-darki text-light"
                : "bg-transparent text-dark"
            }`}
            style={{
              border: "1px solid #32200D",
              fontSize: "0.7rem",
              fontWeight: 500,
            }}
            onClick={() => setActiveFilter("SOLD")}
          >
            SOLD
          </button>

          <button
            className={`btn px-3 py-1  rounded ${
              activeFilter === "FOR SALE"
                ? "bg-darki text-light"
                : "bg-transparent text-dark"
            }`}
            style={{
              border: "1px solid #32200D",
              fontSize: "0.7rem",
              fontWeight: 500,
            }}
            onClick={() => setActiveFilter("FOR SALE")}
          >
            FOR SALE
          </button>
        </div>

        <p
          className="text-dark mt-2"
          style={{ fontSize: "1rem", letterSpacing: "1px" }}
        >
          1650 FACADES
        </p>
      </div>
      <div className="row g-3">
        {cardData.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card title={item.title} price={item.price} image={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
