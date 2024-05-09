import React from "react";
import tajmahal from "./img/taj_mahal.jpg";
import Chicken from "./img/chicken.jpg";
import colosseum from "./img/colosseum.jpg";
import "./packageStruc.css";
import machu from "./img/machu.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './packageStruc.css'

function Package() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container my-5 px-5">
        <div className="card-container">
          <div class="card mb-3" style={{ width: "26rem" }}>
            {" "}
            {/* Added `mb-3` for margin and `style` for width */}
            <img src={Chicken} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Chichen Itza</h5>
              <p class="card-text">
              Chichen Itza: Ancient Mayan city with iconic pyramid, rich history, and cultural significance.
              </p>
              <p class="card-text">Location : Yucatan, Mexico </p>
              <p class="card-text">Price : $449 </p>
              <button
                onClick={() => {
                  navigate("/itza");
                }}
                class="btn btn-primary"
              >
                Get More Details
              </button>
            </div>
          </div>
          <div class="card" style={{ width: "26rem" }}>
            <img src={tajmahal} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Taj Mahal</h5>
              <p class="card-text">
              Iconic marble mausoleum in India, symbolizing love, adorned with intricate architectural details and gardens.
              </p>
              <p class="card-text">Location : Agra, India </p>
              <p class="card-text">Price : $999 </p>
              <button class="btn btn-primary" onClick={() => {
                  navigate("/tajmahal");
                }}>
              Get More Details
              </button>
            </div>
          </div>
          <div class="card" style={{ width: "26rem" }}>
            <img src={machu} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Machu Picchu</h5>
              <p class="card-text">
              Iconic ancient Incan citadel nestled in the Andes; a marvel of history and architecture.
              </p>
              <p class="card-text">Location : Peru </p>
              <p class="card-text">Price : $850 </p>
              <Link to="/machupicchu" class="btn btn-primary" >
              Get More Details
              </Link>
            </div>
          </div>
          <div class="card" style={{ width: "26rem" }}>
            <img src={colosseum} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Colosseum</h5>
              <p class="card-text">
              Iconic ancient Roman amphitheater, symbolizing power, grandeur, and history, attracting millions of visitors yearly.
              </p>
              <p class="card-text">Location : Roma RM, Italy </p>
              <p class="card-text">Price : $800 </p>
              <Link to="/colosseum" class="btn btn-primary" >
              Get More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
