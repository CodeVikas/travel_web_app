import React from "react";
import Navbar from "../navbar/navbar";
import Packages from "./packageStrac";
import Footer from "../Footer/footer";
import './package.css'

function TravelPackage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container my-5 ps-5">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold">Unveil Your Next Adventure:</h1>
            <p className="explore-text">Explore Our Exclusive Travel Packages</p>
          </div>
        </div>
      </div>

      <Packages />
      <Footer />
    </React.Fragment>
  );
}

export default TravelPackage;
