import React, { useState, useRef } from "react";
import collector from "../assets/icon_become_collector 1.png";
import discr from "../assets/icon_collection 1.png";
import newsletter from "../assets/icon_newsletter 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import nft1 from "../assets/nft1.png";
import { Link } from "react-router-dom";

function Work() {
  const swiperRef = useRef(null);

  const cardData = Array.from({ length: 12 }).map((_, index) => ({
    id: index,
    title: `VAN ENKHUIZEN`,
    price: (Math.random() * 100 + 10).toFixed(1),
    image: nft1,
  }));

  const [activeFilter, setActiveFilter] = useState("ALL");

  return (
    <div className="py-5 px-4 container">
      <div className="d-bloc d-md-flex justify-content-between py-4 align-items-center">
        <h2 className="font-bold mb-4" style={{fontSize:"34px"}}>LATEST CARDS</h2>
        <div className="d-flex gap-2 flex-wrap justify-content-start">
          {["ALL", "RARE", "OWNED", "SOLD", "FOR SALE"].map((filter) => (
            <button
              key={filter}
              className={`btn px-3 py-1 rounded ${
                activeFilter === filter
                  ? "bg-darki text-light"
                  : "bg-transparent #32200D"
              }`}
              style={{
                border: "1px solid #32200D",
                fontSize: "12px",
                fontWeight: 500,
              }}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Navigation + Swiper */}
      <div className="position-relative">
        {/* Left Arrow */}
        <div
          className="custom-swiper-button-prev"
          style={{
            position: "absolute",
            top: "50%",
            left: "-20px",
            zIndex: 10,
            transform: "translateY(-50%)",
           cursor: "pointer",
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
            backgroundColor:"#1a1207",
            padding:"3px 12px",
            borderRadius:"50pc"
          }}
        >
          &#10094;
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {cardData.map(({ id, title, price, image }) => (
            <SwiperSlide key={id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <img
                    src={image}
                    className="w-100"
                    style={{ height: "100%" }}
                    alt={title}
                  />
                  <div className="d-flex justify-content-between mb-2">
                    <p className="fw-bold mb-0" style={{fontSize:"14px"}}>{title}</p>
                    <p className="fw-bold mb-0" style={{fontSize:"14px"}}>${price}</p>
                  </div>
                  <Link
                    to="/ColloctionDetail"
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <div
          className="custom-swiper-button-next"
          style={{
            position: "absolute",
            top: "50%",
            right: "-20px",
            zIndex: 10,
            transform: "translateY(-50%)",
            cursor: "pointer",
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
            backgroundColor:"#1a1207",
            padding:"3px 12px",
            borderRadius:"50pc"
          }}
        >
          &#10095;
        </div>
      </div>
    </div>
  );
}

export default Work;
