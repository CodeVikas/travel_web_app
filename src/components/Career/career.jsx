import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import Image from "./career.jpeg";
import "./career.css";

function Career() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row">
        <div className=" d-flex">
          <div className="w-100 my-4 mx-5 " id="info">
            <h2 className="font-weight-bold mt-5">Find Your Career</h2>
            <h2 className="font-weight-bold mb-4">to Make a better Life</h2>
            <p className="fw-light text-muted small mb-3">
              Explore career opportunities at TarvelWebApp. Join us in
              revolutionizing travel tech. Shape the future, innovate, and
              embark on a rewarding journey.{" "}
              <span className="font-weight-bold">Apply today!</span>
            </p>
            <h4>Why Work With Us </h4>
            <ul>
              <li>Competitive salaries and benefits</li>
              <li>Flexible work arrangements</li>
              <li>Professional development opportunities</li>
              <li>A dynamic and inclusive company culture</li>
              <li>Opportunities for growth and advancement</li>
            </ul>

            <p>
              Share your cv/resume with Us :{" "}
              <a href="mailto:info@travelapp.com">careers@travelwebapp.com</a>
            </p>
          </div>
          <div className="flex-fill">
            <img className="w-100 img-fluid" src={Image} alt="Not Found" />
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Career;
