import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure you import Bootstrap CSS
import { Carousel } from "bootstrap"; // Import Carousel from Bootstrap

import offer1 from "./img/offer1.avif";
import offer2 from "./img/offer2.avif";
import offer3 from './img/offer3.jpg'
import "./offer.css";

function Offer() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current, {
        interval: 1500, // Set autoplay interval in milliseconds
      });
    }
  }, []);

  return (
    <React.Fragment>
      <div className="carosel">
        <div
          ref={carouselRef}
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={offer2} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={offer1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={offer3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev text-dark"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next text-dark"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Offer;
